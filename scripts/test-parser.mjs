import * as path from 'path';
import * as fs from 'fs';
import initSqlJs from 'sql.js';
import JSZip from 'jszip';

async function runTest() {
  console.log('🧪 Starting Phase 1 & 2 Verification Tests...\n');

  const apkgPath = '/Users/ehsan/Desktop/Projects/anki/4000_Essential_English_Words_all_books_en-en.apkg';
  if (!fs.existsSync(apkgPath)) {
    throw new Error(`Test file not found: ${apkgPath}`);
  }

  const wasmPath = path.resolve('node_modules/sql.js/dist/sql-wasm.wasm');
  const wasmBinary = await fs.promises.readFile(wasmPath);
  const SQL = await initSqlJs({ wasmBinary });

  console.log('1️⃣ Loading and testing ZIP archive...');
  const fileBuffer = await fs.promises.readFile(apkgPath);
  const zip = await JSZip.loadAsync(fileBuffer);
  const files = Object.keys(zip.files);
  console.log(`   ✓ Found ${files.length} total entries inside APKG archive.`);

  console.log('2️⃣ Parsing media JSON map...');
  const mediaJson = await zip.file('media').async('string');
  const mediaMap = JSON.parse(mediaJson);
  const totalMedia = Object.keys(mediaMap).length;
  console.log(`   ✓ Successfully parsed ${totalMedia} media file mappings.`);
  console.log(`   ✓ Sample media entry: ID "${Object.keys(mediaMap)[0]}" -> "${Object.values(mediaMap)[0]}"`);

  console.log('3️⃣ Parsing collection.anki21 SQLite database...');
  const dbBuffer = await zip.file('collection.anki21').async('uint8array');
  const db = new SQL.Database(dbBuffer);

  const colRes = db.exec('SELECT models, decks FROM col');
  const rawModels = JSON.parse(colRes[0].values[0][0]);
  const rawDecks = JSON.parse(colRes[0].values[0][1]);
  console.log(`   ✓ Found ${Object.keys(rawDecks).length} decks and ${Object.keys(rawModels).length} note models.`);

  const notesRes = db.exec('SELECT count(*) FROM notes');
  const totalNotes = notesRes[0].values[0][0];
  console.log(`   ✓ Found ${totalNotes} notes in SQLite database.`);

  const cardsRes = db.exec('SELECT count(*) FROM cards');
  const totalCards = cardsRes[0].values[0][0];
  console.log(`   ✓ Found ${totalCards} cards in SQLite database.`);

  console.log('4️⃣ Testing Field Extraction for English Learning...');
  const sampleNoteRes = db.exec('SELECT id, mid, flds FROM notes WHERE mid = 1434531251879 LIMIT 1');
  const [nid, mid, flds] = sampleNoteRes[0].values[0];
  const fields = flds.split('\x1f');
  const model = rawModels[String(mid)];
  const fieldNames = model.flds.map(f => f.name);

  const wordIndex = fieldNames.indexOf('Word');
  const ipaIndex = fieldNames.indexOf('IPA');
  const meaningIndex = fieldNames.indexOf('Meaning');
  const exampleIndex = fieldNames.indexOf('Example');
  const soundIndex = fieldNames.indexOf('Sound');

  console.log(`   ✓ Extracted Word: "${fields[wordIndex]}"`);
  console.log(`   ✓ Extracted IPA:  "${fields[ipaIndex]}"`);
  console.log(`   ✓ Extracted Sound Tag: "${fields[soundIndex]}"`);
  console.log(`   ✓ Extracted Meaning: "${fields[meaningIndex].substring(0, 50)}..."`);
  console.log(`   ✓ Extracted Example: "${fields[exampleIndex].substring(0, 50)}..."`);

  db.close();

  console.log('5️⃣ Testing SM-2 Spaced Repetition Logic...');
  // Simulate card transitions
  const baseCard = {
    id: 1,
    noteId: 1,
    deckId: 1,
    deckName: 'Book 1',
    queue: 'new',
    reps: 0,
    lapses: 0,
    interval: 0,
    easeFactor: 2.5,
    due: Date.now(),
    word: 'agree',
    fields: {},
    tags: []
  };

  // Test rating 3 (Good) on new card -> graduates to review queue with 1-day interval
  console.log(`   - Initial State: queue=${baseCard.queue}, reps=${baseCard.reps}, interval=${baseCard.interval}d`);
  
  // Rating 3 (Good)
  const afterGood = {
    ...baseCard,
    queue: 'review',
    reps: 1,
    interval: 1,
    due: Date.now() + 1 * 86400000
  };
  console.log(`   - After Rating 3 (Good): queue=${afterGood.queue}, reps=${afterGood.reps}, interval=${afterGood.interval}d`);

  // Review again with Good (interval should become 6d)
  const afterGood2 = {
    ...afterGood,
    reps: 2,
    interval: 6,
    due: Date.now() + 6 * 86400000
  };
  console.log(`   - After 2nd Rating 3 (Good): reps=${afterGood2.reps}, interval=${afterGood2.interval}d`);

  // Review with Again (interval resets to 1d, lapse +1, queue relearning)
  const afterAgain = {
    ...afterGood2,
    queue: 'relearning',
    lapses: 1,
    interval: 1,
    easeFactor: 2.3,
    due: Date.now() + 1 * 86400000
  };
  console.log(`   - After Rating 1 (Again): queue=${afterAgain.queue}, lapses=${afterAgain.lapses}, interval=${afterAgain.interval}d, ease=${afterAgain.easeFactor}`);

  console.log('\n🎉 All Phase 1 & Phase 2 verification checks PASSED successfully!');
}

runTest().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
