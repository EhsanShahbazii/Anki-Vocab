import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { AnkiStorage } from '../storage/ankiStorage';
import { AnkiCard, CardRating } from '../types/anki';
import { ApkgReader } from '../parser/apkgReader';

export class AnkiStudyPanel {
  public static currentPanel: AnkiStudyPanel | undefined;
  private readonly panel: vscode.WebviewPanel;
  private readonly extensionUri: vscode.Uri;
  private storage: AnkiStorage;
  private currentDeckId: number | undefined;
  private currentBoxNumber: number | undefined;
  private studyMode: 'flashcard' | 'typing' | 'listening' = 'flashcard';
  private autoPlayAudio = true;
  private sessionLimit = 30;
  private dueCards: AnkiCard[] = [];
  private currentCardIndex = 0;
  private isAnswerRevealed = false;
  private sessionReviewedCount = 0;
  private sessionEnded = false;
  private sessionRatings = { again: 0, hard: 0, good: 0, easy: 0 };
  private disposables: vscode.Disposable[] = [];

  public static createOrShow(
    extensionUri: vscode.Uri,
    storage: AnkiStorage,
    deckId?: number,
    boxNumber?: number,
    limit?: number
  ) {
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    if (AnkiStudyPanel.currentPanel) {
      AnkiStudyPanel.currentPanel.panel.reveal(column);
      if (limit !== undefined) {
        AnkiStudyPanel.currentPanel.sessionLimit = limit;
      }
      if (deckId !== undefined || boxNumber !== undefined || limit !== undefined) {
        AnkiStudyPanel.currentPanel.setScope(deckId, boxNumber);
      }
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      'ankiStudy',
      'Anki',
      column || vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [
          extensionUri,
          vscode.Uri.file(storage.getMediaDirectory()),
          vscode.Uri.file(path.join(extensionUri.fsPath, 'dist'))
        ]
      }
    );

    AnkiStudyPanel.currentPanel = new AnkiStudyPanel(panel, extensionUri, storage, deckId, boxNumber, limit);
  }

  private constructor(
    panel: vscode.WebviewPanel,
    extensionUri: vscode.Uri,
    storage: AnkiStorage,
    initialDeckId?: number,
    initialBoxNumber?: number,
    initialLimit?: number
  ) {
    this.panel = panel;
    this.extensionUri = extensionUri;
    this.storage = storage;
    this.currentDeckId = initialDeckId;
    this.currentBoxNumber = initialBoxNumber;
    if (initialLimit !== undefined) {
      this.sessionLimit = initialLimit;
    }

    this.panel.iconPath = vscode.Uri.joinPath(extensionUri, 'media', 'icons', 'anki.svg');
    this.panel.onDidDispose(() => this.dispose(), null, this.disposables);

    this.panel.webview.onDidReceiveMessage(
      async (message) => {
        await this.handleWebviewMessage(message);
      },
      null,
      this.disposables
    );

    this.loadCards();
    this.updateWebview();
  }

  public setScope(deckId?: number, boxNumber?: number) {
    this.currentDeckId = deckId;
    this.currentBoxNumber = boxNumber;
    this.sessionEnded = false;
    this.loadCards();
    this.postState();
  }

  public setDeck(deckId?: number) {
    this.setScope(deckId, this.currentBoxNumber);
  }

  private loadCards() {
    if (this.currentBoxNumber !== undefined) {
      this.dueCards = this.storage.getCardsByLeitnerBox(this.currentBoxNumber, this.currentDeckId, this.sessionLimit);
    } else {
      this.dueCards = this.storage.getDueCards(this.currentDeckId, this.sessionLimit);
    }
    this.currentCardIndex = 0;
    this.isAnswerRevealed = false;
    this.sessionEnded = false;
  }

  private getCurrentCard(): AnkiCard | undefined {
    if (this.sessionEnded) return undefined;
    if (this.currentCardIndex < this.dueCards.length) {
      return this.dueCards[this.currentCardIndex];
    }
    return undefined;
  }

  private async handleWebviewMessage(message: { command: string; [key: string]: any }) {
    switch (message.command) {
      case 'getInitialState':
        this.postState();
        break;

      case 'revealAnswer':
        this.isAnswerRevealed = true;
        this.postState();
        break;

      case 'endSession':
        this.sessionEnded = true;
        this.postState();
        break;

      case 'setSessionLimit': {
        const limit = Number(message.limit);
        if (limit > 0) {
          this.sessionLimit = limit;
          this.loadCards();
          this.postState();
        }
        break;
      }

      case 'rateCard': {
        const current = this.getCurrentCard();
        if (current) {
          const rating = message.rating as CardRating;
          await this.storage.updateCardRating(current.id, rating, this.studyMode);
          this.sessionReviewedCount++;

          if (rating === 1) {
            this.sessionRatings.again++;
            this.dueCards.push(current);
          } else if (rating === 2) {
            this.sessionRatings.hard++;
          } else if (rating === 3) {
            this.sessionRatings.good++;
          } else if (rating === 4) {
            this.sessionRatings.easy++;
          }

          this.currentCardIndex++;
          this.isAnswerRevealed = false;
          this.postState();
        }
        break;
      }

      case 'switchDeck':
        this.currentDeckId = message.deckId === -1 ? undefined : Number(message.deckId);
        this.sessionEnded = false;
        this.loadCards();
        this.postState();
        break;

      case 'switchBox':
        this.currentBoxNumber = message.boxNumber === -1 ? undefined : Number(message.boxNumber);
        this.sessionEnded = false;
        this.loadCards();
        this.postState();
        break;

      case 'importApkgDialog': {
        const uris = await vscode.window.showOpenDialog({
          canSelectFiles: true,
          canSelectFolders: false,
          canSelectMany: false,
          filters: { 'Anki Package': ['apkg', 'colpkg'] },
          title: 'Select Anki Package (.apkg) to Import'
        });
        if (uris && uris.length > 0) {
          await this.processApkgImport(uris[0].fsPath);
        }
        break;
      }

      case 'importLocalWorkspaceApkg': {
        const workspaceApkg = path.join(vscode.workspace.workspaceFolders?.[0]?.uri.fsPath || '', '4000_Essential_English_Words_all_books_en-en.apkg');
        if (fs.existsSync(workspaceApkg)) {
          await this.processApkgImport(workspaceApkg);
        } else {
          vscode.window.showWarningMessage(`File not found: ${workspaceApkg}`);
        }
        break;
      }

      case 'restartSession':
        this.loadCards();
        this.sessionReviewedCount = 0;
        this.sessionRatings = { again: 0, hard: 0, good: 0, easy: 0 };
        this.sessionEnded = false;
        this.postState();
        break;

      case 'startTypeExam': {
        const deckId = message.deckId === -1 || message.deckId === undefined ? undefined : Number(message.deckId);
        const count = Number(message.count) || 20;
        this.startTypeExamSession(deckId, count);
        break;
      }

      case 'submitTypeExamAnswer': {
        const cardId = Number(message.cardId);
        const isCorrect = Boolean(message.isCorrect);
        if (cardId) {
          await this.storage.updateCardRating(cardId, isCorrect ? 3 : 1, 'typing');
        }
        break;
      }
    }
  }

  private startTypeExamSession(deckId?: number, count = 20) {
    const allCards = this.storage.getCards(deckId).filter(c => c.sound && c.word);
    if (allCards.length === 0) {
      this.panel.webview.postMessage({
        type: 'typeExamCards',
        cards: [],
        deckId: deckId ?? -1
      });
      return;
    }

    // Shuffle cards randomly
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);
    const mediaDir = this.storage.getMediaDirectory();

    const examCards = selected.map(c => {
      let imageUri: string | undefined;
      let soundUri: string | undefined;
      let soundMeaningUri: string | undefined;
      let soundExampleUri: string | undefined;

      if (c.image) {
        const p = path.join(mediaDir, c.image);
        if (fs.existsSync(p)) {
          imageUri = this.panel.webview.asWebviewUri(vscode.Uri.file(p)).toString();
        }
      }
      if (c.sound) {
        const p = path.join(mediaDir, c.sound);
        if (fs.existsSync(p)) {
          soundUri = this.panel.webview.asWebviewUri(vscode.Uri.file(p)).toString();
        }
      }
      if (c.soundMeaning) {
        const p = path.join(mediaDir, c.soundMeaning);
        if (fs.existsSync(p)) {
          soundMeaningUri = this.panel.webview.asWebviewUri(vscode.Uri.file(p)).toString();
        }
      }
      if (c.soundExample) {
        const p = path.join(mediaDir, c.soundExample);
        if (fs.existsSync(p)) {
          soundExampleUri = this.panel.webview.asWebviewUri(vscode.Uri.file(p)).toString();
        }
      }

      return {
        id: c.id,
        word: c.word,
        ipa: c.ipa,
        meaning: c.meaning,
        example: c.example,
        soundUri,
        soundMeaningUri,
        soundExampleUri,
        imageUri
      };
    });

    this.panel.webview.postMessage({
      type: 'typeExamCards',
      cards: examCards,
      deckId: deckId ?? -1
    });
  }

  private async processApkgImport(filePath: string) {
    try {
      const reader = new ApkgReader();
      const mediaDir = this.storage.getMediaDirectory();

      this.panel.webview.postMessage({
        type: 'importProgress',
        progress: { stage: 'reading_zip', percent: 10, message: 'Loading package...' }
      });

      const result = await reader.parseApkg(filePath, mediaDir, (p) => {
        this.panel.webview.postMessage({
          type: 'importProgress',
          progress: p
        });
      });

      await this.storage.saveImportedData(result.decks, result.cards);
      this.loadCards();
      this.postState();
      vscode.window.showInformationMessage(`Imported ${result.cards.length} cards across ${result.decks.length} decks!`);
    } catch (err) {
      vscode.window.showErrorMessage(`Import failed: ${err}`);
      this.panel.webview.postMessage({
        type: 'importError',
        error: String(err)
      });
    }
  }

  private postState() {
    const card = this.getCurrentCard();
    const mediaDir = this.storage.getMediaDirectory();

    let imageUri: string | undefined;
    let soundUri: string | undefined;
    let soundMeaningUri: string | undefined;
    let soundExampleUri: string | undefined;

    if (card) {
      if (card.image) {
        const p = path.join(mediaDir, card.image);
        if (fs.existsSync(p)) {
          imageUri = this.panel.webview.asWebviewUri(vscode.Uri.file(p)).toString();
        }
      }
      if (card.sound) {
        const p = path.join(mediaDir, card.sound);
        if (fs.existsSync(p)) {
          soundUri = this.panel.webview.asWebviewUri(vscode.Uri.file(p)).toString();
        }
      }
      if (card.soundMeaning) {
        const p = path.join(mediaDir, card.soundMeaning);
        if (fs.existsSync(p)) {
          soundMeaningUri = this.panel.webview.asWebviewUri(vscode.Uri.file(p)).toString();
        }
      }
      if (card.soundExample) {
        const p = path.join(mediaDir, card.soundExample);
        if (fs.existsSync(p)) {
          soundExampleUri = this.panel.webview.asWebviewUri(vscode.Uri.file(p)).toString();
        }
      }
    }

    const state = {
      type: 'stateUpdate',
      decks: this.storage.getDecks(),
      leitnerBoxes: this.storage.getLeitnerBoxes(this.currentDeckId),
      currentBoxNumber: this.currentBoxNumber ?? -1,
      sessionLimit: this.sessionLimit,
      sessionEnded: this.sessionEnded,
      sessionRatings: this.sessionRatings,
      analytics7Day: this.storage.get7DayAnalytics(),
      stats: this.storage.getOverallStats(),
      currentDeckId: this.currentDeckId ?? -1,
      studyMode: this.studyMode,
      autoPlayAudio: this.autoPlayAudio,
      isAnswerRevealed: this.isAnswerRevealed,
      currentCardIndex: this.currentCardIndex,
      totalDueInSession: this.dueCards.length,
      sessionReviewedCount: this.sessionReviewedCount,
      card: this.sessionEnded ? null : (card
        ? {
            ...card,
            imageUri,
            soundUri,
            soundMeaningUri,
            soundExampleUri
          }
        : null)
    };

    this.panel.webview.postMessage(state);
  }

  private updateWebview() {
    const codiconsUri = this.panel.webview.asWebviewUri(
      vscode.Uri.joinPath(this.extensionUri, 'dist', 'codicons', 'codicon.css')
    );

    this.panel.webview.html = this.getHtmlForWebview(codiconsUri);
  }

  private getHtmlForWebview(codiconsUri: vscode.Uri): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${codiconsUri}">
  <title>Anki</title>
  <style>
    :root {
      --bg: var(--vscode-editor-background);
      --fg: var(--vscode-editor-foreground);
      --desc-fg: var(--vscode-descriptionForeground, #8c8c8c);
      --card-bg: var(--vscode-editorWidget-background, #252526);
      --border: var(--vscode-editorWidget-border, #333333);
      --btn-bg: var(--vscode-button-background);
      --btn-fg: var(--vscode-button-foreground);
      --btn-hover: var(--vscode-button-hoverBackground);
      --btn-sec-bg: var(--vscode-button-secondaryBackground, #3a3d41);
      --btn-sec-fg: var(--vscode-button-secondaryForeground, #ffffff);
      --btn-sec-hover: var(--vscode-button-secondaryHoverBackground, #45494e);
      --badge-bg: var(--vscode-badge-background);
      --badge-fg: var(--vscode-badge-foreground);
      --input-bg: var(--vscode-input-background);
      --input-fg: var(--vscode-input-foreground);
      --input-border: var(--vscode-input-border);
      --focus-border: var(--vscode-focusBorder);
      --progress-bg: var(--vscode-progressBar-background, #007acc);
      --radius: 6px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg);
      color: var(--fg);
      font-family: var(--vscode-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 1.5;
      display: flex;
      justify-content: center;
      padding: 16px;
      user-select: none;
    }

    .app {
      width: 100%;
      max-width: 640px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Top Tabs (Practice vs Analytics) */
    .nav-tabs {
      display: flex;
      gap: 4px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 8px;
    }

    .nav-tab {
      background: transparent;
      border: 1px solid transparent;
      color: var(--desc-fg);
      font-size: 12px;
      font-weight: 500;
      padding: 4px 12px;
      border-radius: var(--radius);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s;
    }

    .nav-tab:hover {
      color: var(--fg);
      background: var(--btn-sec-bg);
    }

    .nav-tab.active {
      color: var(--fg);
      background: var(--btn-sec-bg);
      border-color: var(--border);
    }

    /* Minimal Breadcrumbs & Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: var(--desc-fg);
      padding: 0 2px;
    }

    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .breadcrumbs select {
      background: transparent;
      color: var(--fg);
      border: 1px solid transparent;
      border-radius: var(--radius);
      font-size: 12px;
      cursor: pointer;
      outline: none;
      padding: 2px 4px;
    }

    .breadcrumbs select:hover, .breadcrumbs select:focus {
      border-color: var(--border);
      background: var(--card-bg);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 3px 8px;
      border-radius: var(--radius);
      font-size: 11px;
      background: var(--badge-bg);
      color: var(--badge-fg);
      border: 1px solid transparent;
    }

    .pill-clickable {
      cursor: pointer;
      border-color: var(--border);
      transition: all 0.15s;
    }

    .pill-clickable:hover {
      border-color: var(--focus-border);
      background: var(--btn-sec-bg);
      color: var(--fg);
    }

    .btn-end {
      background: var(--btn-sec-bg);
      color: var(--btn-sec-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      font-size: 11px;
      padding: 3px 10px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.15s;
    }

    .btn-end:hover {
      background: var(--btn-sec-hover);
      border-color: var(--focus-border);
    }

    /* Leitner Boxes Navigation Bar */
    .leitner-bar {
      display: flex;
      gap: 4px;
      overflow-x: auto;
      padding-bottom: 2px;
      scrollbar-width: none;
    }

    .leitner-bar::-webkit-scrollbar { display: none; }

    .box-chip {
      background: transparent;
      color: var(--desc-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 3px 8px;
      font-size: 11px;
      white-space: nowrap;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.1s;
    }

    .box-chip:hover {
      background: var(--btn-sec-bg);
      color: var(--fg);
    }

    .box-chip.active {
      background: var(--badge-bg);
      color: var(--badge-fg);
      border-color: var(--focus-border);
      font-weight: 500;
    }

    /* Progress bar */
    .progress-bar {
      height: 2px;
      width: 100%;
      background: var(--border);
      border-radius: 1px;
      overflow: hidden;
    }

    .progress-bar-inner {
      height: 100%;
      width: 0%;
      background: var(--progress-bg);
      transition: width 0.2s ease;
    }

    /* Study Card */
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 16px;
      min-height: 360px;
      justify-content: space-between;
    }

    .word-title {
      font-size: 42px;
      font-weight: 700;
      color: var(--fg);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }

    .word-spell {
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: 14px;
      color: var(--desc-fg);
      background: var(--input-bg);
      border: 1px solid var(--border);
      padding: 2px 12px;
      border-radius: 12px;
    }

    .audio-control-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .audio-play-btn {
      background: var(--btn-sec-bg);
      color: var(--btn-sec-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      font-size: 12px;
      padding: 5px 14px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s;
    }

    .audio-play-btn:hover {
      background: var(--btn-sec-hover);
      border-color: var(--focus-border);
      color: var(--fg);
    }

    .speed-toggle-btn {
      background: transparent;
      color: var(--desc-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      font-size: 11px;
      font-family: var(--vscode-editor-font-family, monospace);
      padding: 5px 8px;
      cursor: pointer;
      transition: all 0.15s;
    }

    .speed-toggle-btn:hover {
      background: var(--btn-sec-bg);
      color: var(--fg);
      border-color: var(--focus-border);
    }

    /* Leitner Box Menu Cards */
    .leitner-box-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 14px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: border-color 0.15s;
    }

    .leitner-box-card:hover {
      border-color: var(--focus-border);
    }

    .leitner-box-info {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .leitner-box-name {
      font-size: 13px;
      font-weight: 600;
      color: var(--fg);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .leitner-box-meta {
      font-size: 11px;
      color: var(--desc-fg);
    }

    .image-container {
      max-height: 170px;
      border-radius: var(--radius);
      overflow: hidden;
      border: 1px solid var(--border);
    }

    .image-container img {
      max-height: 170px;
      max-width: 100%;
      display: block;
      object-fit: contain;
    }

    /* Details (Revealed) */
    .details {
      width: 100%;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 14px;
      background: rgba(0, 0, 0, 0.15);
      border-radius: var(--radius);
      border-left: 2px solid var(--progress-bg);
    }

    .meaning {
      font-size: 14px;
      color: var(--fg);
    }

    .example {
      font-size: 13px;
      color: var(--desc-fg);
      font-style: italic;
    }

    .audio-triggers {
      display: flex;
      gap: 8px;
      margin-top: 4px;
    }

    .audio-btn {
      font-size: 11px;
      background: var(--btn-sec-bg);
      color: var(--btn-sec-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 3px 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .audio-btn:hover {
      background: var(--btn-sec-hover);
    }

    /* Actions */
    .actions {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 8px;
    }

    .btn-primary {
      background: var(--btn-bg);
      color: var(--btn-fg);
      border: 1px solid transparent;
      border-radius: var(--radius);
      padding: 8px 24px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .btn-primary:hover {
      background: var(--btn-hover);
    }

    .rating-row {
      display: flex;
      width: 100%;
      gap: 8px;
    }

    .btn-rate {
      flex: 1;
      padding: 8px 4px;
      font-size: 12px;
      font-weight: 500;
      background: var(--btn-sec-bg);
      color: var(--btn-sec-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      transition: all 0.1s;
    }

    .btn-rate:hover {
      border-color: var(--focus-border);
      background: var(--btn-sec-hover);
    }

    .rate-sub {
      font-size: 10px;
      color: var(--desc-fg);
    }

    .b-again { border-top: 2px solid #e06c75; }
    .b-hard  { border-top: 2px solid #d19a66; }
    .b-good  { border-top: 2px solid #61afef; }
    .b-easy  { border-top: 2px solid #98c379; }

    /* Summary Stats Badges */
    .summary-grid {
      display: flex;
      gap: 12px;
      margin: 12px 0;
    }

    .stat-box {
      background: rgba(0, 0, 0, 0.12);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 8px 14px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-number {
      font-size: 18px;
      font-weight: 600;
      color: var(--fg);
    }

    /* Modal / Popover for Setting Session Goal */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }

    .modal-box {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 20px;
      width: 90%;
      max-width: 320px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .quick-limits {
      display: flex;
      gap: 6px;
      justify-content: space-between;
    }

    .limit-chip {
      flex: 1;
      padding: 6px 0;
      text-align: center;
      background: var(--input-bg);
      color: var(--input-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      cursor: pointer;
      font-size: 12px;
    }

    .limit-chip:hover {
      background: var(--btn-hover);
      color: var(--btn-fg);
      border-color: var(--focus-border);
    }

    .modal-actions {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 4px;
    }

    .custom-limit-input {
      height: 32px;
      box-sizing: border-box;
      width: 80px;
      padding: 0 8px;
      background: var(--input-bg);
      color: var(--input-fg);
      border: 1px solid var(--input-border);
      border-radius: var(--radius);
      font-size: 12px;
      outline: none;
    }

    .custom-limit-input:focus {
      border-color: var(--focus-border);
    }

    .modal-action-btn {
      height: 32px !important;
      box-sizing: border-box;
      padding: 0 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
    }

    /* Shadcn/UI Style Analytics Layout */
    .shadcn-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 8px;
    }

    .shadcn-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .shadcn-card-title {
      font-size: 12px;
      color: var(--desc-fg);
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .shadcn-card-value {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: var(--fg);
      margin: 2px 0;
    }

    .shadcn-card-desc {
      font-size: 11px;
      color: var(--desc-fg);
    }

    .bar-chart-container {
      display: flex;
      align-items: flex-end;
      gap: 12px;
      height: 120px;
      padding-top: 16px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 6px;
    }

    .bar-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: flex-end;
      position: relative;
    }

    .bar-pill {
      width: 100%;
      max-width: 28px;
      background: var(--progress-bg);
      border-radius: 4px 4px 0 0;
      min-height: 4px;
      transition: height 0.3s ease;
    }

    .bar-pill:hover {
      opacity: 0.85;
    }

    .bar-label {
      font-size: 11px;
      color: var(--desc-fg);
      margin-top: 4px;
    }

    .leitner-progress-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .leitner-progress-header {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--fg);
    }

    .leitner-progress-track {
      height: 6px;
      width: 100%;
      background: var(--border);
      border-radius: 3px;
      overflow: hidden;
    }

    .leitner-progress-bar {
      height: 100%;
      background: var(--progress-bg);
      border-radius: 3px;
    }

    /* Footer hints */
    .footer {
      font-size: 11px;
      color: var(--desc-fg);
      text-align: center;
      font-family: var(--vscode-editor-font-family, monospace);
    }

    /* Empty state */
    .empty-state {
      background: var(--card-bg);
      border: 1px dashed var(--border);
      border-radius: var(--radius);
      padding: 48px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;
      cursor: pointer;
    }

    .empty-state.dragover {
      border-color: var(--focus-border);
    }

    .empty-icon {
      font-size: 32px;
      color: var(--desc-fg);
    }

    .quick-link {
      color: var(--vscode-textLink-foreground, #3794ff);
      cursor: pointer;
      font-size: 12px;
      text-decoration: underline;
      background: transparent;
      border: none;
      margin-top: 4px;
    }

    kbd {
      background: rgba(255, 255, 255, 0.08);
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 10px;
      border: 1px solid var(--border);
    }

    /* Type Exam Styles */
    .exam-input {
      width: 100%;
      max-width: 360px;
      height: 38px;
      padding: 0 14px;
      font-size: 15px;
      font-weight: 500;
      text-align: center;
      background: var(--input-bg);
      color: var(--input-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      outline: none;
      letter-spacing: 0.5px;
      box-sizing: border-box;
      transition: all 0.2s;
    }

    .exam-input:focus {
      border-color: var(--focus-border);
      box-shadow: 0 0 0 1px var(--focus-border);
    }

    .exam-input.correct {
      border-color: #98c379 !important;
      background: rgba(152, 195, 121, 0.12) !important;
    }

    .exam-input.incorrect {
      border-color: #e06c75 !important;
      background: rgba(224, 108, 117, 0.12) !important;
    }

    .exam-feedback {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 8px 14px;
      border-radius: var(--radius);
      font-size: 13px;
      text-align: center;
    }

    .exam-feedback.correct {
      background: rgba(152, 195, 121, 0.12);
      color: #98c379;
      border: 1px solid rgba(152, 195, 121, 0.3);
    }

    .exam-feedback.incorrect {
      background: rgba(224, 108, 117, 0.12);
      color: #e06c75;
      border: 1px solid rgba(224, 108, 117, 0.3);
    }

    .exam-typed-wrong {
      text-decoration: line-through;
      color: #e06c75;
      font-weight: 600;
    }

    .exam-typed-correct {
      color: #98c379;
      font-weight: 600;
    }

    .hidden { display: none !important; }
  </style>
</head>
<body>

<div class="app">
  <!-- Top Navigation Tabs (Practice vs Type Exam vs Leitner vs Analytics) -->
  <div class="nav-tabs">
    <button id="tabPractice" class="nav-tab active" onclick="switchNav('practice')"><i class="codicon codicon-book"></i> Practice</button>
    <button id="tabTypeExam" class="nav-tab" onclick="switchNav('typeExam')"><i class="codicon codicon-keyboard"></i> Type Exam</button>
    <button id="tabLeitner" class="nav-tab" onclick="switchNav('leitner')"><i class="codicon codicon-package"></i> Leitner</button>
    <button id="tabAnalytics" class="nav-tab" onclick="switchNav('analytics')"><i class="codicon codicon-graph"></i> Analytics</button>
  </div>

  <!-- PRACTICE VIEW -->
  <div id="practiceView" style="display: flex; flex-direction: column; gap: 10px;">
    <!-- Minimal Header -->
    <div class="header">
      <div class="breadcrumbs">
        <span>Anki</span>
        <span>›</span>
        <select id="deckSelector">
          <option value="-1">All Books</option>
        </select>
      </div>

      <div class="header-actions">
        <span id="streakPill" class="pill"><i class="codicon codicon-flame"></i> <span id="streakDays">0d</span></span>
        <button id="cardCountPill" class="pill pill-clickable" title="Click to set session goal (e.g. 20, 30 words)"><i class="codicon codicon-target"></i> <span id="cardCountText">0 / 0</span></button>
        <button id="endSessionBtn" class="btn-end" title="Finish current learning session"><i class="codicon codicon-check"></i> End</button>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div id="progressFill" class="progress-bar-inner"></div>
    </div>

    <!-- Empty / Drop State -->
    <div id="emptyView" class="empty-state">
      <i class="codicon codicon-mortar-board empty-icon"></i>
      <div>
        <div style="font-weight: 500; margin-bottom: 4px;">No deck loaded</div>
        <div style="font-size: 12px; color: var(--desc-fg);">Drop an .apkg file here to begin</div>
      </div>
      <button id="chooseFileBtn" class="btn-primary"><i class="codicon codicon-folder-opened"></i> Open .apkg</button>
      <button id="loadWorkspaceBtn" class="quick-link">Load 4000 Essential English Words</button>

      <div id="importProgressBox" class="hidden" style="width: 100%; max-width: 300px; margin-top: 8px;">
        <div id="importStatusText" style="font-size: 11px; margin-bottom: 4px; color: var(--desc-fg);"></div>
        <div class="progress-bar"><div id="importProgressInner" class="progress-bar-inner"></div></div>
      </div>
    </div>

    <!-- Active Card View -->
    <div id="cardView" class="card hidden">
      <!-- Front: 3 Clean Lines -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 8px;">
        <!-- Line 1: Word Title -->
        <div id="wordDisplay" class="word-title">agree</div>
        
        <!-- Line 2: How to Spell / Phonetic Pronunciation -->
        <div id="ipaDisplay" class="word-spell">/əˈɡriː/</div>
        
        <!-- Line 3: Play Button & Speed Toggle -->
        <div class="audio-control-row">
          <button id="audioWordBtn" class="audio-play-btn" title="Play pronunciation (R)">
            <i class="codicon codicon-play"></i> Play Audio
          </button>
          <button id="speedBtn" class="speed-toggle-btn" title="Click to cycle audio speed: 1.0x / 0.8x / 1.2x">1.0x</button>
        </div>
      </div>

      <!-- Back / Details (revealed) -->
      <div id="revealedSection" class="hidden" style="width: 100%; display: flex; flex-direction: column; align-items: center; gap: 12px;">
        <div id="imageBox" class="image-container hidden">
          <img id="cardImg" src="" alt="card image" />
        </div>

        <div class="details">
          <div id="meaningText" class="meaning"></div>
          <div id="exampleText" class="example"></div>

          <div class="audio-triggers">
            <button id="audioMeaningBtn" class="audio-btn"><i class="codicon codicon-play"></i> Meaning</button>
            <button id="audioExampleBtn" class="audio-btn"><i class="codicon codicon-play"></i> Example</button>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="actions">
        <button id="revealBtn" class="btn-primary">Show Answer <kbd>Space</kbd></button>
        <div id="ratingRow" class="rating-row hidden">
          <button class="btn-rate b-again" onclick="rate(1)">Again <span class="rate-sub">1m <kbd>1</kbd></span></button>
          <button class="btn-rate b-hard"  onclick="rate(2)">Hard <span class="rate-sub">12h <kbd>2</kbd></span></button>
          <button class="btn-rate b-good"  onclick="rate(3)">Good <span class="rate-sub">1d <kbd>3</kbd></span></button>
          <button class="btn-rate b-easy"  onclick="rate(4)">Easy <span class="rate-sub">4d <kbd>4</kbd></span></button>
        </div>
      </div>
    </div>

    <!-- Finished / Summary View -->
    <div id="finishedView" class="card hidden" style="justify-content: center; gap: 14px;">
      <i class="codicon codicon-pass-filled" style="font-size: 36px; color: #98c379;"></i>
      <div>
        <div id="summaryTitle" style="font-size: 18px; font-weight: 600;">Session Complete! &#x1F389;</div>
        <div id="summarySubtitle" style="font-size: 12px; color: var(--desc-fg); margin-top: 4px;">Cards reviewed this session</div>
      </div>

      <div class="summary-grid">
        <div class="stat-box">
          <div class="stat-number" id="sumTotal">0</div>
          <div style="color: var(--desc-fg);">Reviewed</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" style="color: #98c379;" id="sumGood">0</div>
          <div style="color: var(--desc-fg);">Good/Easy</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" style="color: #e06c75;" id="sumAgain">0</div>
          <div style="color: var(--desc-fg);">Again</div>
        </div>
      </div>

      <div style="display: flex; gap: 8px;">
        <button id="studyMoreBtn" class="btn-primary"><i class="codicon codicon-refresh"></i> Review More</button>
        <button id="box1QuickBtn" class="btn-rate" style="flex: unset; padding: 8px 16px;" onclick="practiceBox(1)"><i class="codicon codicon-package"></i> Review Box 1</button>
      </div>
    </div>
  </div>

  <!-- TYPE EXAM TAB: LISTEN & TYPE SPELLING EXAM -->
  <div id="typeExamView" class="hidden" style="display: flex; flex-direction: column; gap: 10px;">
    <!-- Minimal Header -->
    <div class="header">
      <div class="breadcrumbs">
        <span>Exam</span>
        <span>›</span>
        <select id="examDeckSelector">
          <option value="-1">All Books</option>
        </select>
      </div>

      <div class="header-actions">
        <span id="examScorePill" class="pill" title="Score"><i class="codicon codicon-check"></i> <span id="examScoreText">0 / 0</span></span>
        <span id="examStreakPill" class="pill" title="Streak"><i class="codicon codicon-flame"></i> <span id="examStreakText">0</span></span>
        <button id="endExamBtn" class="btn-end" title="End exam session" onclick="endTypeExam()"><i class="codicon codicon-debug-stop"></i> End</button>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div id="examProgressFill" class="progress-bar-inner"></div>
    </div>

    <!-- Active Exam Card -->
    <div id="examCardView" class="card" style="align-items: center; gap: 14px; min-height: 280px; padding: 24px 20px;">
      <div style="font-size: 11px; color: var(--desc-fg); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">
        Listen &amp; Type the Word
      </div>

      <!-- Listen & Audio Controls -->
      <div class="audio-control-row" style="margin: 4px 0;">
        <button id="examPlayBtn" class="audio-play-btn" style="padding: 10px 22px; font-size: 13px;" onclick="playExamAudio()">
          <i class="codicon codicon-unmute"></i> Listen Word <kbd>Ctrl+R</kbd>
        </button>
        <button id="examSpeedBtn" class="speed-toggle-btn" title="Cycle audio speed: 1.0x / 0.8x / 1.2x" onclick="cycleExamSpeed()">1.0x</button>
        <button id="examHintBtn" class="audio-btn" title="Show contextual hint" onclick="toggleExamHint()">
          <i class="codicon codicon-lightbulb"></i> Hint
        </button>
      </div>

      <!-- Context Hint Section -->
      <div id="examHintBox" class="hidden" style="background: rgba(0,0,0,0.15); border: 1px dashed var(--border); border-radius: var(--radius); padding: 10px 16px; font-size: 12px; color: var(--desc-fg); text-align: center; max-width: 440px;">
        <div id="examHintExample" style="margin-bottom: 4px; font-style: italic;"></div>
        <div id="examHintIpa" style="font-size: 11px; color: var(--vscode-textLink-foreground, #3794ff);"></div>
      </div>

      <!-- Input & Action Row -->
      <div style="width: 100%; max-width: 380px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <input type="text" id="examInput" class="exam-input" placeholder="Type what you hear..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />

        <div id="examActionsRow" style="display: flex; gap: 8px; width: 100%; justify-content: center;">
          <button id="examCheckBtn" class="btn-primary" style="flex: 1; max-width: 160px; height: 32px;" onclick="checkExamAnswer()">
            Check <kbd>Enter</kbd>
          </button>
          <button id="examSkipBtn" class="btn-end" style="height: 32px; padding: 0 16px;" onclick="skipExamCard()">
            Skip
          </button>
        </div>

        <div id="examNextActionsRow" class="hidden" style="display: flex; gap: 8px; width: 100%; justify-content: center;">
          <button id="examNextBtn" class="btn-primary" style="flex: 1; max-width: 200px; height: 32px;" onclick="nextExamCard()">
            Next Word <kbd>Enter</kbd>
          </button>
        </div>
      </div>

      <!-- Feedback Banner -->
      <div id="examFeedbackBox" class="hidden" style="width: 100%; max-width: 420px; display: flex; flex-direction: column; gap: 8px;"></div>

      <!-- Revealed Details (Meaning, Picture, Example) -->
      <div id="examDetailsSection" class="hidden" style="width: 100%; max-width: 440px; display: flex; flex-direction: column; align-items: center; gap: 10px; border-top: 1px solid var(--border); padding-top: 12px; margin-top: 4px;">
        <div id="examImageBox" class="image-container hidden" style="max-height: 120px;">
          <img id="examImg" src="" alt="word image" style="max-height: 120px; object-fit: contain;" />
        </div>
        <div id="examMeaningText" class="meaning" style="font-size: 13px; text-align: center;"></div>
        <div id="examExampleText" class="example" style="font-size: 12px; text-align: center;"></div>
      </div>
    </div>

    <!-- Exam Finished Summary View -->
    <div id="examFinishedView" class="card hidden" style="justify-content: center; gap: 14px; text-align: center;">
      <i class="codicon codicon-pass-filled" style="font-size: 36px; color: #98c379;"></i>
      <div>
        <div style="font-size: 18px; font-weight: 600;">Exam Complete! &#x1F389;</div>
        <div style="font-size: 12px; color: var(--desc-fg); margin-top: 4px;">Here are your listening &amp; spelling results</div>
      </div>

      <div class="summary-grid">
        <div class="stat-box">
          <div class="stat-number" id="examSumScore">0 / 0</div>
          <div style="color: var(--desc-fg);">Score</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" style="color: #98c379;" id="examSumAccuracy">0%</div>
          <div style="color: var(--desc-fg);">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" style="color: #e5c07b;" id="examSumStreak">0</div>
          <div style="color: var(--desc-fg);">Best Streak</div>
        </div>
      </div>

      <div style="display: flex; gap: 8px; justify-content: center; margin-top: 6px;">
        <button class="btn-primary" onclick="restartTypeExam()"><i class="codicon codicon-refresh"></i> Start New Exam</button>
        <button class="btn-rate" style="flex: unset; padding: 8px 16px;" onclick="switchNav('practice')"><i class="codicon codicon-book"></i> Back to Practice</button>
      </div>
    </div>
  </div>

  <!-- LEITNER TAB: DEDICATED PRACTICE REVIEW MENU -->
  <div id="leitnerView" class="hidden" style="display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-weight: 600; font-size: 15px;">Leitner Boxes</div>
        <div style="font-size: 12px; color: var(--desc-fg);">Practice and advance vocabulary through spaced repetition</div>
      </div>
      <button class="btn-primary" style="font-size: 12px; padding: 5px 12px;" onclick="practiceBox(-1)">
        <i class="codicon codicon-layers"></i> Practice All Due
      </button>
    </div>

    <!-- Dynamic list of Leitner box cards -->
    <div id="leitnerBoxesCardsList" style="display: flex; flex-direction: column; gap: 8px;"></div>
  </div>

  <!-- SHADCN/UI STYLE ANALYTICS VIEW -->
  <div id="analyticsView" class="hidden" style="display: flex; flex-direction: column; gap: 12px;">
    <!-- Metric KPI Cards -->
    <div class="shadcn-grid">
      <div class="shadcn-card">
        <div class="shadcn-card-title">
          <span>Total Vocabulary</span>
          <i class="codicon codicon-library"></i>
        </div>
        <div class="shadcn-card-value" id="anaTotalWords">3,871</div>
        <div class="shadcn-card-desc">4000 Essential English Words</div>
      </div>

      <div class="shadcn-card">
        <div class="shadcn-card-title">
          <span>Mastered</span>
          <i class="codicon codicon-pass-filled" style="color: #98c379;"></i>
        </div>
        <div class="shadcn-card-value" id="anaMastered">0</div>
        <div class="shadcn-card-desc" id="anaMasteredDesc">Box 4 & 5 (long-term memory)</div>
      </div>

      <div class="shadcn-card">
        <div class="shadcn-card-title">
          <span>Retention Rate</span>
          <i class="codicon codicon-heart" style="color: #e06c75;"></i>
        </div>
        <div class="shadcn-card-value" id="anaRetention">100%</div>
        <div class="shadcn-card-desc">Good / Easy ratings ratio</div>
      </div>

      <div class="shadcn-card">
        <div class="shadcn-card-title">
          <span>Study Streak</span>
          <i class="codicon codicon-flame" style="color: #e5c07b;"></i>
        </div>
        <div class="shadcn-card-value" id="anaStreak">0d</div>
        <div class="shadcn-card-desc" id="anaTotalReviews">0 lifetime reviews</div>
      </div>
    </div>

    <!-- 7-Day Activity Chart (shadcn style bar chart) -->
    <div class="shadcn-card" style="gap: 8px;">
      <div class="shadcn-card-title">
        <span>7-Day Review Activity</span>
        <span id="anaWeekTotal" style="font-size: 11px; color: var(--desc-fg);">0 reviews</span>
      </div>
      <div style="font-size: 11px; color: var(--desc-fg);">Cards reviewed each day over the past week</div>

      <div id="barChartContainer" class="bar-chart-container"></div>
    </div>

    <!-- Leitner Box Progression (shadcn style) -->
    <div class="shadcn-card" style="gap: 10px;">
      <div class="shadcn-card-title">
        <span>Leitner Spaced Repetition Mastery</span>
        <span style="font-size: 11px; color: var(--desc-fg);">5 Retention Stages</span>
      </div>
      <div id="leitnerBarsContainer" style="display: flex; flex-direction: column; gap: 8px;"></div>
    </div>
  </div>

  <!-- Set Session Goal Modal -->
  <div id="goalModal" class="modal-overlay hidden">
    <div class="modal-box">
      <div style="font-weight: 600;">Session Goal</div>
      <div style="font-size: 12px; color: var(--desc-fg);">How many words do you want to study?</div>
      <div class="quick-limits">
        <button class="limit-chip" onclick="applyLimit(10)">10</button>
        <button class="limit-chip" onclick="applyLimit(20)">20</button>
        <button class="limit-chip" onclick="applyLimit(30)">30</button>
        <button class="limit-chip" onclick="applyLimit(50)">50</button>
        <button class="limit-chip" onclick="applyLimit(100)">100</button>
      </div>
      <div class="modal-actions">
        <input type="number" id="customLimitInput" class="custom-limit-input" placeholder="Custom" min="1" max="500" />
        <button class="btn-primary modal-action-btn" onclick="applyCustomLimit()">Set</button>
        <button class="btn-end modal-action-btn" onclick="closeGoalModal()">Cancel</button>
      </div>
    </div>
  </div>

  <!-- Footer Shortcut Hints -->
  <div class="footer">
    <kbd>Space</kbd> Flip &bull; <kbd>1-4</kbd> Rate &bull; <kbd>R</kbd> Audio &bull; <kbd>Esc</kbd> End
  </div>
</div>

<audio id="audioPlayer"></audio>

<script>
  const vscode = acquireVsCodeApi();
  let state = null;
  let currentPlaybackRate = 1.0;
  let currentNav = 'practice';

  // DOM elements
  const practiceView = document.getElementById('practiceView');
  const typeExamView = document.getElementById('typeExamView');
  const leitnerView = document.getElementById('leitnerView');
  const analyticsView = document.getElementById('analyticsView');
  const tabPractice = document.getElementById('tabPractice');
  const tabTypeExam = document.getElementById('tabTypeExam');
  const tabLeitner = document.getElementById('tabLeitner');
  const tabAnalytics = document.getElementById('tabAnalytics');
  const emptyView = document.getElementById('emptyView');
  const cardView = document.getElementById('cardView');
  const finishedView = document.getElementById('finishedView');
  const deckSelector = document.getElementById('deckSelector');
  const progressFill = document.getElementById('progressFill');
  const streakDays = document.getElementById('streakDays');
  const cardCountPill = document.getElementById('cardCountPill');
  const cardCountText = document.getElementById('cardCountText');
  const wordDisplay = document.getElementById('wordDisplay');
  const ipaDisplay = document.getElementById('ipaDisplay');
  const revealedSection = document.getElementById('revealedSection');
  const imageBox = document.getElementById('imageBox');
  const cardImg = document.getElementById('cardImg');
  const meaningText = document.getElementById('meaningText');
  const exampleText = document.getElementById('exampleText');
  const revealBtn = document.getElementById('revealBtn');
  const ratingRow = document.getElementById('ratingRow');
  const audioPlayer = document.getElementById('audioPlayer');
  const endSessionBtn = document.getElementById('endSessionBtn');
  const goalModal = document.getElementById('goalModal');
  const customLimitInput = document.getElementById('customLimitInput');
  const speedBtn = document.getElementById('speedBtn');

  // Type Exam DOM elements
  const examDeckSelector = document.getElementById('examDeckSelector');
  const examScoreText = document.getElementById('examScoreText');
  const examStreakText = document.getElementById('examStreakText');
  const examProgressFill = document.getElementById('examProgressFill');
  const examCardView = document.getElementById('examCardView');
  const examFinishedView = document.getElementById('examFinishedView');
  const examInput = document.getElementById('examInput');
  const examActionsRow = document.getElementById('examActionsRow');
  const examNextActionsRow = document.getElementById('examNextActionsRow');
  const examFeedbackBox = document.getElementById('examFeedbackBox');
  const examDetailsSection = document.getElementById('examDetailsSection');
  const examImageBox = document.getElementById('examImageBox');
  const examImg = document.getElementById('examImg');
  const examMeaningText = document.getElementById('examMeaningText');
  const examExampleText = document.getElementById('examExampleText');
  const examHintBox = document.getElementById('examHintBox');
  const examHintExample = document.getElementById('examHintExample');
  const examHintIpa = document.getElementById('examHintIpa');
  const examSpeedBtn = document.getElementById('examSpeedBtn');
  const examSumScore = document.getElementById('examSumScore');
  const examSumAccuracy = document.getElementById('examSumAccuracy');
  const examSumStreak = document.getElementById('examSumStreak');

  // Type Exam State
  let examCards = [];
  let examIndex = 0;
  let examScore = 0;
  let examStreak = 0;
  let examMaxStreak = 0;
  let examState = 'question'; // 'question' | 'feedback' | 'finished'
  let examPlaybackRate = 1.0;
  let examHintVisible = false;

  vscode.postMessage({ command: 'getInitialState' });

  window.addEventListener('message', (e) => {
    const msg = e.data;
    if (msg.type === 'stateUpdate') {
      render(msg);
    } else if (msg.type === 'typeExamCards') {
      onReceiveTypeExamCards(msg.cards);
    } else if (msg.type === 'importProgress') {
      const box = document.getElementById('importProgressBox');
      box.classList.remove('hidden');
      document.getElementById('importStatusText').innerText = msg.progress.message;
      document.getElementById('importProgressInner').style.width = msg.progress.percent + '%';
    }
  });

  function switchNav(nav) {
    currentNav = nav;
    [tabPractice, tabTypeExam, tabLeitner, tabAnalytics].forEach(t => t.classList.remove('active'));
    [practiceView, typeExamView, leitnerView, analyticsView].forEach(v => v.classList.add('hidden'));

    if (nav === 'practice') {
      practiceView.classList.remove('hidden');
      tabPractice.classList.add('active');
    } else if (nav === 'typeExam') {
      typeExamView.classList.remove('hidden');
      tabTypeExam.classList.add('active');
      if (examCards.length === 0 && state?.decks?.length) {
        startTypeExam();
      } else if (examCards.length > 0 && examState === 'question') {
        setTimeout(() => { examInput.focus(); }, 50);
      }
    } else if (nav === 'leitner') {
      leitnerView.classList.remove('hidden');
      tabLeitner.classList.add('active');
      if (state) renderLeitnerMenu(state);
    } else {
      analyticsView.classList.remove('hidden');
      tabAnalytics.classList.add('active');
      if (state) renderAnalytics(state);
    }
  }

  function render(s) {
    state = s;

    // Header updates
    streakDays.innerText = (s.stats?.streakDays || 0) + 'd';
    populateDecks(s.decks || [], s.currentDeckId);

    if (!s.decks || s.decks.length === 0) {
      emptyView.classList.remove('hidden');
      cardView.classList.add('hidden');
      finishedView.classList.add('hidden');
      cardCountText.innerText = '0 / 0';
      progressFill.style.width = '0%';
      endSessionBtn.classList.add('hidden');
      return;
    }

    if (s.sessionEnded || !s.card) {
      emptyView.classList.add('hidden');
      cardView.classList.add('hidden');
      finishedView.classList.remove('hidden');
      endSessionBtn.classList.add('hidden');

      const total = s.sessionReviewedCount || 0;
      const goodCount = (s.sessionRatings?.good || 0) + (s.sessionRatings?.easy || 0);
      const againCount = (s.sessionRatings?.again || 0);
      document.getElementById('sumTotal').innerText = total;
      document.getElementById('sumGood').innerText = goodCount;
      document.getElementById('sumAgain').innerText = againCount;

      cardCountText.innerText = total + ' reviewed';
      progressFill.style.width = '100%';
      return;
    }

    emptyView.classList.add('hidden');
    finishedView.classList.add('hidden');
    cardView.classList.remove('hidden');
    endSessionBtn.classList.remove('hidden');

    // Progress
    const total = s.totalDueInSession || 1;
    const cur = s.currentCardIndex || 0;
    cardCountText.innerText = (cur + 1) + ' / ' + total;
    progressFill.style.width = Math.min(100, Math.round(((cur + 1) / total) * 100)) + '%';

    // Populate Card (3-Line Layout)
    const c = s.card;
    wordDisplay.innerText = c.word;

    if (c.ipa) {
      ipaDisplay.innerText = c.ipa.startsWith('/') ? c.ipa : ('/' + c.ipa + '/');
      ipaDisplay.classList.remove('hidden');
    } else {
      ipaDisplay.classList.add('hidden');
    }

    // Audio handlers
    document.getElementById('audioWordBtn').onclick = () => playAudio(c.soundUri);
    document.getElementById('audioMeaningBtn').onclick = () => playAudio(c.soundMeaningUri);
    document.getElementById('audioExampleBtn').onclick = () => playAudio(c.soundExampleUri);

    if (s.autoPlayAudio && !s.isAnswerRevealed && c.soundUri) {
      playAudio(c.soundUri);
    }

    // Reveal toggle
    if (s.isAnswerRevealed) {
      revealedSection.classList.remove('hidden');
      revealBtn.classList.add('hidden');
      ratingRow.classList.remove('hidden');

      if (c.imageUri) {
        cardImg.src = c.imageUri;
        imageBox.classList.remove('hidden');
      } else {
        imageBox.classList.add('hidden');
      }

      meaningText.innerHTML = c.meaning || '';
      exampleText.innerHTML = c.example || '';
    } else {
      revealedSection.classList.add('hidden');
      revealBtn.classList.remove('hidden');
      ratingRow.classList.add('hidden');
    }

    if (currentNav === 'leitner') renderLeitnerMenu(s);
    if (currentNav === 'analytics') renderAnalytics(s);
  }

  function renderLeitnerMenu(s) {
    const list = document.getElementById('leitnerBoxesCardsList');
    list.innerHTML = '';
    const boxes = s.leitnerBoxes || [];

    boxes.forEach(b => {
      const card = document.createElement('div');
      card.className = 'leitner-box-card';
      card.innerHTML = \`
        <div class="leitner-box-info">
          <div class="leitner-box-name">
            <i class="codicon codicon-package"></i> \${b.name}
          </div>
          <div class="leitner-box-meta">
            Interval: <b>\${b.intervalDesc}</b> &bull; Total: <b>\${b.totalCards} words</b> (\${b.dueCards} due)
          </div>
        </div>
        <button class="btn-primary" style="padding: 6px 14px; font-size: 12px;" onclick="practiceBox(\${b.box})">
          Practice Box \${b.box}
        </button>
      \`;
      list.appendChild(card);
    });
  }

  function practiceBox(boxNum) {
    switchBox(boxNum);
    switchNav('practice');
  }

  function renderAnalytics(s) {
    const stats = s.stats || {};
    const boxes = s.leitnerBoxes || [];
    const week = s.analytics7Day || [];

    document.getElementById('anaTotalWords').innerText = stats.totalCards || 0;

    const box4 = boxes.find(b => b.box === 4)?.totalCards || 0;
    const box5 = boxes.find(b => b.box === 5)?.totalCards || 0;
    const mastered = box4 + box5;
    const total = stats.totalCards || 1;
    document.getElementById('anaMastered').innerText = mastered;
    document.getElementById('anaMasteredDesc').innerText = Math.round((mastered / total) * 100) + '% of entire collection';

    const totalRev = stats.totalReviews || 0;
    document.getElementById('anaTotalReviews').innerText = totalRev + ' lifetime reviews';
    document.getElementById('anaStreak').innerText = (stats.streakDays || 0) + 'd';

    // Bar Chart
    const barContainer = document.getElementById('barChartContainer');
    barContainer.innerHTML = '';
    const maxVal = Math.max(1, ...week.map(w => w.total));
    let weekSum = 0;

    week.forEach(w => {
      weekSum += w.total;
      const col = document.createElement('div');
      col.className = 'bar-col';

      const heightPct = Math.round((w.total / maxVal) * 90);
      col.innerHTML = \`
        <div class="bar-pill" style="height: \${Math.max(4, heightPct)}%;" title="\${w.date} (\${w.dayName}): \${w.total} reviews (\${w.good} Good, \${w.again} Again)"></div>
        <span class="bar-label">\${w.dayName}</span>
      \`;
      barContainer.appendChild(col);
    });

    document.getElementById('anaWeekTotal').innerText = weekSum + ' reviews this week';

    // Leitner Progress Bars
    const leitnerContainer = document.getElementById('leitnerBarsContainer');
    leitnerContainer.innerHTML = '';

    boxes.forEach(b => {
      const pct = Math.round((b.totalCards / total) * 100);
      const row = document.createElement('div');
      row.className = 'leitner-progress-row';
      row.innerHTML = \`
        <div class="leitner-progress-header">
          <span>\${b.name} <span style="color: var(--desc-fg);">(\${b.intervalDesc})</span></span>
          <span style="font-weight: 500;">\${b.totalCards} <span style="color: var(--desc-fg);">(\${pct}%)</span></span>
        </div>
        <div class="leitner-progress-track">
          <div class="leitner-progress-bar" style="width: \${pct}%;"></div>
        </div>
      \`;
      leitnerContainer.appendChild(row);
    });
  }

  function playAudio(uri) {
    if (!uri) return;
    audioPlayer.src = uri;
    audioPlayer.playbackRate = currentPlaybackRate;
    audioPlayer.play().catch(() => {});
  }

  // Audio speed cycling
  speedBtn.onclick = () => {
    if (currentPlaybackRate === 1.0) currentPlaybackRate = 0.8;
    else if (currentPlaybackRate === 0.8) currentPlaybackRate = 1.2;
    else currentPlaybackRate = 1.0;
    speedBtn.innerText = currentPlaybackRate.toFixed(1) + 'x';
    audioPlayer.playbackRate = currentPlaybackRate;
  };

  function reveal() {
    vscode.postMessage({ command: 'revealAnswer' });
  }

  function rate(r) {
    vscode.postMessage({ command: 'rateCard', rating: r });
  }

  function switchBox(boxNum) {
    vscode.postMessage({ command: 'switchBox', boxNumber: boxNum });
  }

  function populateDecks(decks, currentId) {
    deckSelector.innerHTML = '<option value="-1">All Books</option>';
    examDeckSelector.innerHTML = '<option value="-1">All Books</option>';
    decks.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.id;
      const cleanName = d.name.replace(/.*::/, '');
      opt.innerText = cleanName + ' (' + d.cardCount + ' words)';
      if (d.id === currentId) opt.selected = true;
      deckSelector.appendChild(opt);

      const examOpt = opt.cloneNode(true);
      examDeckSelector.appendChild(examOpt);
    });
  }

  // Type Exam Logic
  function startTypeExam(deckId) {
    const dId = deckId !== undefined ? deckId : examDeckSelector.value;
    vscode.postMessage({ command: 'startTypeExam', deckId: dId, count: 20 });
  }

  function onReceiveTypeExamCards(cards) {
    examCards = cards || [];
    examIndex = 0;
    examScore = 0;
    examStreak = 0;
    examMaxStreak = 0;
    examState = 'question';
    examHintVisible = false;

    if (examCards.length === 0) {
      examCardView.classList.add('hidden');
      examFinishedView.classList.remove('hidden');
      examSumScore.innerText = '0 / 0';
      examSumAccuracy.innerText = '0%';
      examSumStreak.innerText = '0';
      return;
    }

    examCardView.classList.remove('hidden');
    examFinishedView.classList.add('hidden');
    renderExamCard();
  }

  function renderExamCard() {
    if (examIndex >= examCards.length) {
      finishTypeExam();
      return;
    }

    examState = 'question';
    examHintVisible = false;
    examHintBox.classList.add('hidden');

    const card = examCards[examIndex];
    examProgressFill.style.width = Math.round((examIndex / examCards.length) * 100) + '%';
    examScoreText.innerText = examScore + ' / ' + examIndex;
    examStreakText.innerText = examStreak;

    // Reset input
    examInput.value = '';
    examInput.className = 'exam-input';
    examInput.disabled = false;

    // Reset actions and feedback
    examActionsRow.classList.remove('hidden');
    examNextActionsRow.classList.add('hidden');
    examFeedbackBox.classList.add('hidden');
    examDetailsSection.classList.add('hidden');

    // Context hint data (blank out target word in example sentence)
    if (card.example) {
      const parts = card.example.split(new RegExp(card.word, 'i'));
      examHintExample.innerHTML = parts.join('<b>_____</b>');
    } else if (card.meaning) {
      examHintExample.innerHTML = card.meaning;
    } else {
      examHintExample.innerHTML = 'Listen closely to the audio pronunciation';
    }

    if (card.ipa) {
      examHintIpa.innerText = card.ipa.startsWith('/') ? card.ipa : ('/' + card.ipa + '/');
    } else {
      examHintIpa.innerText = '';
    }

    // Play audio and focus input
    playExamAudio();
    setTimeout(() => { examInput.focus(); }, 80);
  }

  function playExamAudio() {
    const card = examCards[examIndex];
    if (card && card.soundUri) {
      audioPlayer.src = card.soundUri;
      audioPlayer.playbackRate = examPlaybackRate;
      audioPlayer.play().catch(() => {});
    }
  }

  function cycleExamSpeed() {
    if (examPlaybackRate === 1.0) examPlaybackRate = 0.8;
    else if (examPlaybackRate === 0.8) examPlaybackRate = 1.2;
    else examPlaybackRate = 1.0;
    examSpeedBtn.innerText = examPlaybackRate.toFixed(1) + 'x';
    audioPlayer.playbackRate = examPlaybackRate;
  }

  function toggleExamHint() {
    examHintVisible = !examHintVisible;
    if (examHintVisible) {
      examHintBox.classList.remove('hidden');
    } else {
      examHintBox.classList.add('hidden');
    }
    examInput.focus();
  }

  function cleanWord(s) {
    return (s || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function checkExamAnswer() {
    if (examState !== 'question') return;
    const card = examCards[examIndex];
    if (!card) return;

    const userText = examInput.value.trim();
    if (!userText) {
      examInput.focus();
      return;
    }

    examState = 'feedback';
    examInput.disabled = true;

    const isCorrect = cleanWord(userText) === cleanWord(card.word);

    if (isCorrect) {
      examScore++;
      examStreak++;
      examMaxStreak = Math.max(examMaxStreak, examStreak);
      examInput.className = 'exam-input correct';

      const ipaStr = card.ipa ? ('/' + card.ipa.replace(/^\\/|\\/$/g, '') + '/') : '';
      examFeedbackBox.innerHTML = '<div class="exam-feedback correct">' +
        '<i class="codicon codicon-check"></i> ' +
        '<span>Correct! <b>' + card.word + '</b> ' + ipaStr + '</span>' +
        '</div>';
    } else {
      examStreak = 0;
      examInput.className = 'exam-input incorrect';

      examFeedbackBox.innerHTML = '<div class="exam-feedback incorrect">' +
        '<i class="codicon codicon-error"></i> ' +
        '<span>Incorrect</span>' +
        '</div>' +
        '<div style="font-size: 12px; display: flex; gap: 16px; justify-content: center; padding: 4px 0;">' +
        '<span>You typed: <span class="exam-typed-wrong">' + userText + '</span></span>' +
        '<span>Correct: <span class="exam-typed-correct">' + card.word + '</span></span>' +
        '</div>';
    }

    examScoreText.innerText = examScore + ' / ' + (examIndex + 1);
    examStreakText.innerText = examStreak;
    examFeedbackBox.classList.remove('hidden');

    // Reveal details
    if (card.imageUri) {
      examImg.src = card.imageUri;
      examImageBox.classList.remove('hidden');
    } else {
      examImageBox.classList.add('hidden');
    }
    examMeaningText.innerHTML = card.meaning || '';
    examExampleText.innerHTML = card.example || '';
    examDetailsSection.classList.remove('hidden');

    // Toggle action buttons
    examActionsRow.classList.add('hidden');
    examNextActionsRow.classList.remove('hidden');
    const nextBtn = document.getElementById('examNextBtn');
    if (nextBtn) nextBtn.focus();

    // Report answer to backend
    vscode.postMessage({
      command: 'submitTypeExamAnswer',
      cardId: card.id,
      isCorrect: isCorrect
    });
  }

  function skipExamCard() {
    if (examState !== 'question') return;
    examInput.value = '';
    checkExamAnswer();
  }

  function nextExamCard() {
    examIndex++;
    if (examIndex < examCards.length) {
      renderExamCard();
    } else {
      finishTypeExam();
    }
  }

  function finishTypeExam() {
    examState = 'finished';
    examCardView.classList.add('hidden');
    examFinishedView.classList.remove('hidden');
    examProgressFill.style.width = '100%';

    const total = examCards.length;
    examSumScore.innerText = examScore + ' / ' + total;
    const acc = total > 0 ? Math.round((examScore / total) * 100) : 0;
    examSumAccuracy.innerText = acc + '%';
    examSumStreak.innerText = examMaxStreak;
  }

  function endTypeExam() {
    finishTypeExam();
  }

  function restartTypeExam() {
    startTypeExam();
  }

  // Session Goal Modal handlers
  cardCountPill.onclick = () => {
    goalModal.classList.remove('hidden');
    customLimitInput.focus();
  };

  function closeGoalModal() {
    goalModal.classList.add('hidden');
  }

  function applyLimit(n) {
    vscode.postMessage({ command: 'setSessionLimit', limit: n });
    closeGoalModal();
  }

  function applyCustomLimit() {
    const val = parseInt(customLimitInput.value, 10);
    if (val && val > 0) {
      applyLimit(val);
    }
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!goalModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeGoalModal();
      if (e.key === 'Enter') applyCustomLimit();
      return;
    }

    if (currentNav === 'typeExam') {
      if (examState === 'question') {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkExamAnswer();
          return;
        }
        if (e.key.toLowerCase() === 'r' && (e.ctrlKey || e.metaKey || document.activeElement !== examInput)) {
          e.preventDefault();
          playExamAudio();
          return;
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          skipExamCard();
          return;
        }
      } else if (examState === 'feedback') {
        if (e.key === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          nextExamCard();
          return;
        }
        if (e.key.toLowerCase() === 'r') {
          e.preventDefault();
          playExamAudio();
          return;
        }
      }
      return;
    }

    if (e.code === 'Space') {
      e.preventDefault();
      if (!state?.isAnswerRevealed) reveal();
      else rate(3);
    } else if (e.key === '1' && state?.isAnswerRevealed) {
      rate(1);
    } else if (e.key === '2' && state?.isAnswerRevealed) {
      rate(2);
    } else if (e.key === '3' && state?.isAnswerRevealed) {
      rate(3);
    } else if (e.key === '4' && state?.isAnswerRevealed) {
      rate(4);
    } else if (e.key.toLowerCase() === 'r') {
      playAudio(state?.card?.soundUri);
    } else if (e.key === 'Escape') {
      vscode.postMessage({ command: 'endSession' });
    }
  });

  // Event handlers
  revealBtn.onclick = reveal;
  endSessionBtn.onclick = () => vscode.postMessage({ command: 'endSession' });
  deckSelector.onchange = () => vscode.postMessage({ command: 'switchDeck', deckId: deckSelector.value });
  examDeckSelector.onchange = () => startTypeExam(Number(examDeckSelector.value));
  document.getElementById('chooseFileBtn').onclick = () => vscode.postMessage({ command: 'importApkgDialog' });
  document.getElementById('loadWorkspaceBtn').onclick = () => vscode.postMessage({ command: 'importLocalWorkspaceApkg' });
  document.getElementById('studyMoreBtn').onclick = () => vscode.postMessage({ command: 'restartSession' });

  // Drag & drop
  emptyView.addEventListener('dragover', (e) => {
    e.preventDefault();
    emptyView.classList.add('dragover');
  });
  emptyView.addEventListener('dragleave', () => {
    emptyView.classList.remove('dragover');
  });
  emptyView.addEventListener('drop', (e) => {
    e.preventDefault();
    emptyView.classList.remove('dragover');
    vscode.postMessage({ command: 'importApkgDialog' });
  });
</script>

</body>
</html>`;
  }

  public dispose() {
    AnkiStudyPanel.currentPanel = undefined;
    this.panel.dispose();
    while (this.disposables.length) {
      const x = this.disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }
}
