import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as child_process from 'child_process';
import { ApkgReader } from './parser/apkgReader';
import { AnkiStorage } from './storage/ankiStorage';
import { DeckTreeProvider } from './views/deckTreeProvider';
import { AnkiStudyPanel } from './views/studyPanel';
import { AnkiHoverProvider } from './features/hoverProvider';
import { WordOfTheDay } from './features/wordOfTheDay';
import { PomodoroTimer } from './features/pomodoro';

let storage: AnkiStorage;
let statusBarItem: vscode.StatusBarItem;
let treeDataProvider: DeckTreeProvider;
let wordOfTheDay: WordOfTheDay;
let pomodoroTimer: PomodoroTimer;

export async function activate(context: vscode.ExtensionContext) {
  console.log('Activating Anki for VS Code extension...');

  // Initialize storage inside VS Code's globalStorageUri
  const globalStoragePath = context.globalStorageUri.fsPath;
  storage = new AnkiStorage(globalStoragePath);
  await storage.initialize();

  // Register Sidebar Tree Data Provider
  treeDataProvider = new DeckTreeProvider(storage);
  vscode.window.registerTreeDataProvider('anki.deckView', treeDataProvider);

  // Register Hover Provider for code comments & text lookup
  const hoverDisposable = vscode.languages.registerHoverProvider(
    { scheme: 'file' },
    new AnkiHoverProvider(storage)
  );
  context.subscriptions.push(hoverDisposable);

  // Create Status Bar Items
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = 'anki.openStudy';
  context.subscriptions.push(statusBarItem);
  updateStatusBar();

  // Initialize Word of the Day & Pomodoro Timer
  wordOfTheDay = new WordOfTheDay(storage);
  pomodoroTimer = new PomodoroTimer();
  context.subscriptions.push(wordOfTheDay, pomodoroTimer);

  // 1. Command: Open Study Session
  const openStudyDisposable = vscode.commands.registerCommand('anki.openStudy', async (deckId?: number, boxNumber?: number) => {
    AnkiStudyPanel.createOrShow(context.extensionUri, storage, deckId, boxNumber);
    updateStatusBar();
    treeDataProvider.refresh();
  });

  // 2. Command: Open Study Session with custom limit (e.g. 10 words for pomodoro break)
  const openStudyWithLimitDisposable = vscode.commands.registerCommand('anki.openStudyWithLimit', (limit: number) => {
    AnkiStudyPanel.createOrShow(context.extensionUri, storage, undefined, undefined, limit);
    updateStatusBar();
    treeDataProvider.refresh();
  });

  // 3. Command: Open Leitner Box directly
  const openLeitnerDisposable = vscode.commands.registerCommand('anki.openLeitnerBox', async (boxNumber?: number) => {
    if (boxNumber === undefined) {
      const boxes = storage.getLeitnerBoxes();
      const pick = await vscode.window.showQuickPick(
        boxes.map(b => ({
          label: b.name,
          description: `${b.totalCards} cards (${b.dueCards} due) • Interval: ${b.intervalDesc}`,
          box: b.box
        })),
        { placeHolder: 'Select a Leitner Box to review' }
      );
      if (pick) {
        boxNumber = pick.box;
      } else {
        return;
      }
    }
    AnkiStudyPanel.createOrShow(context.extensionUri, storage, undefined, boxNumber);
    updateStatusBar();
    treeDataProvider.refresh();
  });

  // 4. Command: Play Audio for word (Native audio playback on macOS)
  const playAudioDisposable = vscode.commands.registerCommand('anki.playAudioForWord', (word: string) => {
    const card = storage.findWord(word);
    if (card && card.sound) {
      const soundPath = path.join(storage.getMediaDirectory(), card.sound);
      if (fs.existsSync(soundPath)) {
        if (process.platform === 'darwin') {
          child_process.execFile('afplay', [soundPath], (err) => {
            if (err) console.error('afplay error:', err);
          });
        }
      }
    }
  });

  // 5. Command: Lookup selected word in active editor
  const lookupSelectionDisposable = vscode.commands.registerCommand('anki.lookupSelection', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const selection = editor.document.getText(editor.selection).trim();
    if (!selection) {
      vscode.window.showInformationMessage('Please select an English word in your editor to look up.');
      return;
    }

    const card = storage.findWord(selection);
    if (card) {
      const cleanMeaning = (card.meaning || '').replace(/<[^>]+>/g, '');
      const cleanExample = (card.example || '').replace(/<[^>]+>/g, '');
      const ipa = card.ipa ? `/${card.ipa}/ ` : '';

      const choice = await vscode.window.showInformationMessage(
        `${card.word} ${ipa}— ${cleanMeaning}\n\n"${cleanExample}"`,
        'Play Audio',
        'Study in Anki'
      );

      if (choice === 'Play Audio') {
        vscode.commands.executeCommand('anki.playAudioForWord', card.word);
      } else if (choice === 'Study in Anki') {
        vscode.commands.executeCommand('anki.openStudy');
      }
    } else {
      vscode.window.showWarningMessage(`"${selection}" was not found in your Anki vocabulary deck.`);
    }
  });

  // 6. Command: Toggle Pomodoro Timer
  const togglePomodoroDisposable = vscode.commands.registerCommand('anki.togglePomodoro', () => {
    pomodoroTimer.toggle();
  });

  // 7. Command: Show Word of the Day details
  const showWordDetailsDisposable = vscode.commands.registerCommand('anki.showWordOfTheDayDetails', () => {
    wordOfTheDay.showDetails();
  });

  // 8. Command: Import Deck (.apkg)
  const importDeckDisposable = vscode.commands.registerCommand('anki.importDeck', async (fileUri?: vscode.Uri) => {
    let targetUri = fileUri;

    if (!targetUri) {
      const selectedFiles = await vscode.window.showOpenDialog({
        canSelectFiles: true,
        canSelectFolders: false,
        canSelectMany: false,
        filters: { 'Anki Packages': ['apkg', 'colpkg'] },
        title: 'Select Anki Package (.apkg) to Import'
      });

      if (!selectedFiles || selectedFiles.length === 0) {
        return;
      }
      targetUri = selectedFiles[0];
    }

    await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: 'Importing Anki Deck',
        cancellable: false
      },
      async (progress) => {
        try {
          const reader = new ApkgReader();
          const mediaDir = storage.getMediaDirectory();

          let lastPercent = 0;
          const result = await reader.parseApkg(targetUri.fsPath, mediaDir, (p) => {
            const increment = Math.max(0, p.percent - lastPercent);
            lastPercent = p.percent;
            progress.report({
              increment,
              message: p.message
            });
          });

          await storage.saveImportedData(result.decks, result.cards);
          updateStatusBar();
          treeDataProvider.refresh();
          wordOfTheDay.rotateWord();

          vscode.window.showInformationMessage(
            `Successfully imported ${result.cards.length} cards across ${result.decks.length} decks!`
          );

          AnkiStudyPanel.createOrShow(context.extensionUri, storage);
        } catch (error) {
          vscode.window.showErrorMessage(`Failed to import Anki deck: ${error}`);
          console.error(error);
        }
      }
    );
  });

  // 9. Command: Refresh Decks
  const refreshDisposable = vscode.commands.registerCommand('anki.refreshDecks', () => {
    treeDataProvider.refresh();
    updateStatusBar();
    wordOfTheDay.rotateWord();
  });

  // 10. Command: Show Statistics
  const showStatsDisposable = vscode.commands.registerCommand('anki.showStats', () => {
    const stats = storage.getOverallStats();
    vscode.window.showInformationMessage(
      `Anki Stats — Total: ${stats.totalCards} | Due: ${stats.dueCount} | New: ${stats.newCount} | Learned: ${stats.learnedCount} | Reviews Today: ${stats.todayReviews} | Streak: ${stats.streakDays}d`
    );
  });

  context.subscriptions.push(
    openStudyDisposable,
    openStudyWithLimitDisposable,
    openLeitnerDisposable,
    playAudioDisposable,
    lookupSelectionDisposable,
    togglePomodoroDisposable,
    showWordDetailsDisposable,
    importDeckDisposable,
    refreshDisposable,
    showStatsDisposable
  );
}

function updateStatusBar() {
  if (!statusBarItem || !storage) return;

  const stats = storage.getOverallStats();
  if (stats.totalCards === 0) {
    statusBarItem.text = `$(mortar-board) Anki: Import deck`;
    statusBarItem.tooltip = 'Click to import an .apkg deck';
  } else {
    statusBarItem.text = `$(mortar-board) Anki: ${stats.dueCount} due`;
    statusBarItem.tooltip = `Anki English Practice: ${stats.dueCount} due, ${stats.newCount} new cards (${stats.streakDays} day streak)`;
  }
  statusBarItem.show();
}

export function deactivate() {}
