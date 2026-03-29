import * as fs from 'fs';
import * as path from 'path';
import JSZip from 'jszip';
import initSqlJs from 'sql.js';
import { AnkiCard, AnkiDeck, CardQueue, ImportProgress } from '../types/anki';

export interface ApkgParseResult {
  decks: AnkiDeck[];
  cards: AnkiCard[];
  mediaMap: Record<string, string>; // internal number key -> original filename
}

export class ApkgReader {
  private wasmBinaryPath?: string;

  constructor(wasmBinaryPath?: string) {
    this.wasmBinaryPath = wasmBinaryPath;
  }

  /**
   * Parse an .apkg file from disk, optionally extracting media files to mediaTargetDir.
   */
  public async parseApkg(
    apkgFilePath: string,
    mediaTargetDir?: string,
    onProgress?: (progress: ImportProgress) => void
  ): Promise<ApkgParseResult> {
    onProgress?.({
      stage: 'reading_zip',
      percent: 5,
      message: 'Loading package archive...'
    });

    const fileBuffer = await fs.promises.readFile(apkgFilePath);
    const zip = await JSZip.loadAsync(fileBuffer);

    onProgress?.({
      stage: 'parsing_database',
      percent: 25,
      message: 'Loading Anki SQLite database...'
    });

    // 1. Locate and read SQLite database (prefer collection.anki21 over collection.anki2)
    let dbEntry = zip.file('collection.anki21');
    if (!dbEntry) {
      dbEntry = zip.file('collection.anki2');
    }
    if (!dbEntry) {
      throw new Error('Invalid APKG: Neither collection.anki21 nor collection.anki2 found in archive');
    }

    const dbBuffer = await dbEntry.async('uint8array');

    // 2. Read media mapping JSON
    let mediaMap: Record<string, string> = {};
    const mediaEntry = zip.file('media');
    if (mediaEntry) {
      try {
        const mediaJsonStr = await mediaEntry.async('string');
        mediaMap = JSON.parse(mediaJsonStr);
      } catch (e) {
        console.warn('Failed to parse media mapping JSON:', e);
      }
    }

    // 3. Initialize SQL.js and load database
    const sqlOptions: initSqlJs.SqlJsConfig = {};
    if (this.wasmBinaryPath && fs.existsSync(this.wasmBinaryPath)) {
      const buf = await fs.promises.readFile(this.wasmBinaryPath);
      sqlOptions.wasmBinary = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
    } else {
      // Look for default sql-wasm.wasm in dist/ or node_modules
      const distWasm = path.resolve(__dirname, 'sql-wasm.wasm');
      const defaultWasm = path.resolve(__dirname, '../node_modules/sql.js/dist/sql-wasm.wasm');
      const directWasm = path.resolve(__dirname, '../../node_modules/sql.js/dist/sql-wasm.wasm');
      const candidatePath = fs.existsSync(distWasm) ? distWasm : (fs.existsSync(defaultWasm) ? defaultWasm : (fs.existsSync(directWasm) ? directWasm : undefined));
      if (candidatePath) {
        const buf = await fs.promises.readFile(candidatePath);
        sqlOptions.wasmBinary = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
      }
    }

    const SQL = await initSqlJs(sqlOptions);
    const db = new SQL.Database(dbBuffer);

    // 4. Query collection info (models & decks)
    const colRes = db.exec('SELECT models, decks FROM col');
    if (!colRes || colRes.length === 0 || !colRes[0].values.length) {
      throw new Error('Invalid Anki database: "col" table is missing or empty');
    }

    const modelsJson = colRes[0].values[0][0] as string;
    const decksJson = colRes[0].values[0][1] as string;

    const rawModels: Record<string, { id: number; name: string; flds: { name: string; ord: number }[] }> = JSON.parse(modelsJson);
    const rawDecks: Record<string, { id: number; name: string; desc?: string }> = JSON.parse(decksJson);

    // Build Decks Map
    const deckMap = new Map<number, AnkiDeck>();
    for (const [didStr, d] of Object.entries(rawDecks)) {
      const id = Number(didStr);
      deckMap.set(id, {
        id,
        name: d.name,
        description: d.desc,
        cardCount: 0,
        newCount: 0,
        dueCount: 0,
        learnedCount: 0
      });
    }

    // 5. Query notes
    const notesRes = db.exec('SELECT id, mid, flds, tags FROM notes');
    const noteMap = new Map<number, { mid: number; flds: string[]; tags: string[] }>();
    if (notesRes.length > 0) {
      for (const row of notesRes[0].values) {
        const nid = row[0] as number;
        const mid = row[1] as number;
        const fldsStr = (row[2] as string) || '';
        const tagsStr = (row[3] as string) || '';
        noteMap.set(nid, {
          mid,
          flds: fldsStr.split('\x1f'),
          tags: tagsStr.trim().split(/\s+/).filter(Boolean)
        });
      }
    }

    // 6. Query cards
    const cardsRes = db.exec('SELECT id, nid, did, queue, due, ivl, factor, reps, lapses FROM cards');
    const cards: AnkiCard[] = [];

    if (cardsRes.length > 0) {
      for (const row of cardsRes[0].values) {
        const id = row[0] as number;
        const nid = row[1] as number;
        const did = row[2] as number;
        const rawQueue = row[3] as number;
        const rawDue = row[4] as number;
        const ivl = row[5] as number;
        const factor = (row[6] as number) || 2500;
        const reps = row[7] as number;
        const lapses = row[8] as number;

        const note = noteMap.get(nid);
        if (!note) continue;

        const model = rawModels[String(note.mid)];
        const fieldNames = model?.flds?.map(f => f.name) || [];
        const rawFields: Record<string, string> = {};

        for (let i = 0; i < fieldNames.length; i++) {
          rawFields[fieldNames[i]] = note.flds[i] || '';
        }

        // Map English learning specific fields
        const word = rawFields['Word'] || rawFields['English'] || rawFields['Front'] || rawFields['Text'] || '';
        const ipa = rawFields['IPA'] || rawFields['Transcription'] || rawFields['Am&BrTranscription'] || rawFields['BrTranscription'] || rawFields['AmTranscription'] || '';
        const meaning = rawFields['Meaning'] || rawFields['Back'] || rawFields['Back Extra'] || '';
        const example = rawFields['Example'] || '';

        // Extract media references
        const rawImage = rawFields['Image'] || rawFields['IMG'] || '';
        const rawSound = rawFields['Sound'] || rawFields['Audio'] || '';
        const rawSoundMeaning = rawFields['Sound_Meaning'] || '';
        const rawSoundExample = rawFields['Sound_Example'] || '';

        const image = this.extractFilenameFromHtml(rawImage);
        const sound = this.extractFilenameFromSoundTag(rawSound);
        const soundMeaning = this.extractFilenameFromSoundTag(rawSoundMeaning);
        const soundExample = this.extractFilenameFromSoundTag(rawSoundExample);

        // Map queue
        let queue: CardQueue = 'new';
        if (rawQueue === 0) queue = 'new';
        else if (rawQueue === 1) queue = 'learning';
        else if (rawQueue === 2) queue = 'review';
        else if (rawQueue === 3) queue = 'relearning';

        const deck = deckMap.get(did);
        const deckName = deck ? deck.name : 'Default';

        const card: AnkiCard = {
          id,
          noteId: nid,
          deckId: did,
          deckName,
          queue,
          reps,
          lapses,
          interval: ivl,
          easeFactor: Number((factor / 1000).toFixed(2)),
          due: rawDue,
          word,
          ipa: ipa || undefined,
          meaning: meaning || undefined,
          example: example || undefined,
          image: image || undefined,
          sound: sound || undefined,
          soundMeaning: soundMeaning || undefined,
          soundExample: soundExample || undefined,
          fields: rawFields,
          tags: note.tags
        };

        cards.push(card);

        // Update Deck counts
        if (deck) {
          deck.cardCount++;
          if (queue === 'new') deck.newCount++;
          else if (queue === 'review') deck.dueCount++;
          else deck.learnedCount++;
        }
      }
    }

    db.close();

    // 7. Extract media files if target directory is specified
    if (mediaTargetDir && Object.keys(mediaMap).length > 0) {
      await fs.promises.mkdir(mediaTargetDir, { recursive: true });
      const mediaEntries = Object.entries(mediaMap);
      const totalMedia = mediaEntries.length;

      onProgress?.({
        stage: 'extracting_media',
        percent: 40,
        message: `Extracting ${totalMedia} media files...`,
        totalCards: cards.length,
        totalMedia,
        extractedMedia: 0
      });

      let extractedCount = 0;
      for (const [key, realName] of mediaEntries) {
        const fileEntry = zip.file(key);
        if (fileEntry) {
          const content = await fileEntry.async('nodebuffer');
          const destPath = path.join(mediaTargetDir, realName);
          await fs.promises.writeFile(destPath, content);
        }
        extractedCount++;

        if (extractedCount % 500 === 0 || extractedCount === totalMedia) {
          const percent = 40 + Math.floor((extractedCount / totalMedia) * 55);
          onProgress?.({
            stage: 'extracting_media',
            percent,
            message: `Extracting media: ${extractedCount}/${totalMedia}`,
            totalCards: cards.length,
            totalMedia,
            extractedMedia: extractedCount
          });
        }
      }
    }

    onProgress?.({
      stage: 'done',
      percent: 100,
      message: `Imported ${cards.length} cards across ${deckMap.size} decks`,
      totalCards: cards.length
    });

    return {
      decks: Array.from(deckMap.values()).filter(d => d.cardCount > 0),
      cards,
      mediaMap
    };
  }

  private extractFilenameFromHtml(html: string): string | undefined {
    if (!html) return undefined;
    const match = html.match(/<img[^>]+src=["']?([^"'>\s]+)["']?/i);
    return match ? match[1] : undefined;
  }

  private extractFilenameFromSoundTag(tag: string): string | undefined {
    if (!tag) return undefined;
    const match = tag.match(/\[sound:([^\]]+)\]/i);
    return match ? match[1] : (tag.endsWith('.mp3') || tag.endsWith('.wav') || tag.endsWith('.ogg') ? tag : undefined);
  }
}
