import * as vscode from 'vscode';
import { AnkiStorage } from '../storage/ankiStorage';

export class AnkiHoverProvider implements vscode.HoverProvider {
  constructor(private storage: AnkiStorage) {}

  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Hover> {
    const range = document.getWordRangeAtPosition(position);
    if (!range) return undefined;

    const word = document.getText(range).trim();
    if (!word || word.length < 2) return undefined;

    const card = this.storage.findWord(word);
    if (!card) return undefined;

    const md = new vscode.MarkdownString();
    md.isTrusted = true;
    md.supportHtml = true;

    const ipaStr = card.ipa ? ` \`/${card.ipa.replace(/^\/|\/$/g, '')}/\`` : '';
    md.appendMarkdown(`### **${card.word}**${ipaStr}\n\n`);

    if (card.meaning) {
      md.appendMarkdown(`${card.meaning}\n\n`);
    }

    if (card.example) {
      md.appendMarkdown(`*Example*: ${card.example}\n\n`);
    }

    md.appendMarkdown(`---\n`);
    const encodedWord = encodeURIComponent(JSON.stringify(card.word));
    md.appendMarkdown(`[$(play) Play Pronunciation](command:anki.playAudioForWord?${encodedWord}) &nbsp;&bull;&nbsp; [$(mortar-board) Study Card](command:anki.openStudy)`);

    return new vscode.Hover(md, range);
  }
}
