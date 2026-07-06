import * as vscode from 'vscode';
import { AnkiStorage } from '../storage/ankiStorage';
import { AnkiCard } from '../types/anki';

export class WordOfTheDay implements vscode.Disposable {
  private statusBarItem: vscode.StatusBarItem;
  private currentWord: AnkiCard | undefined;
  private rotationTimer: NodeJS.Timeout | undefined;

  constructor(private storage: AnkiStorage) {
    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 50);
    this.statusBarItem.command = 'anki.showWordOfTheDayDetails';
    this.rotateWord();
    // Rotate every 15 minutes
    this.rotationTimer = setInterval(() => this.rotateWord(), 15 * 60 * 1000);
  }

  public rotateWord(): void {
    const word = this.storage.getRandomWord();
    if (word) {
      this.currentWord = word;
      const cleanMeaning = (word.meaning || '')
        .replace(/<[^>]+>/g, '')
        .replace(/^To \w+ is to /i, '')
        .trim();
      const shortMeaning = cleanMeaning.length > 35 ? `${cleanMeaning.substring(0, 35)}...` : cleanMeaning;
      const ipa = word.ipa ? `[${word.ipa}] ` : '';

      this.statusBarItem.text = `$(mortar-board) ${word.word}: ${ipa}${shortMeaning}`;
      this.statusBarItem.tooltip = `Word of the Day: ${word.word}\n${cleanMeaning}\nClick for details and pronunciation`;
      this.statusBarItem.show();
    } else {
      this.statusBarItem.hide();
    }
  }

  public getCurrentWord(): AnkiCard | undefined {
    return this.currentWord;
  }

  public async showDetails(): Promise<void> {
    if (!this.currentWord) {
      this.rotateWord();
      return;
    }

    const card = this.currentWord;
    const cleanMeaning = (card.meaning || '').replace(/<[^>]+>/g, '');
    const cleanExample = (card.example || '').replace(/<[^>]+>/g, '');

    const choice = await vscode.window.showInformationMessage(
      `${card.word} ${card.ipa ? `/${card.ipa}/` : ''}\n\n${cleanMeaning}\n"${cleanExample}"`,
      'Play Pronunciation',
      'Next Word',
      'Open Anki'
    );

    if (choice === 'Play Pronunciation') {
      vscode.commands.executeCommand('anki.playAudioForWord', card.word);
    } else if (choice === 'Next Word') {
      this.rotateWord();
    } else if (choice === 'Open Anki') {
      vscode.commands.executeCommand('anki.openStudy');
    }
  }

  public dispose(): void {
    if (this.rotationTimer) {
      clearInterval(this.rotationTimer);
    }
    this.statusBarItem.dispose();
  }
}
