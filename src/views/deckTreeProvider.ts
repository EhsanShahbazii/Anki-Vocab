import * as vscode from 'vscode';
import { AnkiStorage } from '../storage/ankiStorage';
import { AnkiDeck } from '../types/anki';

export type TreeItemType = 'stat' | 'booksRoot' | 'deck' | 'leitnerRoot' | 'leitnerBox' | 'empty';

export class DeckTreeItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly itemType: TreeItemType,
    public readonly deck?: AnkiDeck,
    public readonly boxNumber?: number
  ) {
    super(label, collapsibleState);

    if (itemType === 'stat') {
      this.iconPath = new vscode.ThemeIcon('flame');
      this.contextValue = 'ankiStat';
    } else if (itemType === 'booksRoot') {
      this.iconPath = new vscode.ThemeIcon('library');
      this.contextValue = 'booksRoot';
    } else if (itemType === 'deck' && deck) {
      this.id = `deck-${deck.id}`;
      const displayName = deck.name.replace(/.*::/, '');
      this.label = displayName;
      this.description = `${deck.cardCount} words`;
      this.tooltip = `${deck.name}\nTotal: ${deck.cardCount} words`;
      this.iconPath = new vscode.ThemeIcon('book');
      this.contextValue = 'ankiDeck';

      this.command = {
        command: 'anki.openStudy',
        title: 'Study Deck',
        arguments: [deck.id, undefined]
      };
    } else if (itemType === 'leitnerRoot') {
      this.iconPath = new vscode.ThemeIcon('inbox');
      this.contextValue = 'leitnerRoot';
    } else if (itemType === 'leitnerBox' && boxNumber !== undefined) {
      this.id = `leitner-box-${boxNumber}`;
      this.iconPath = new vscode.ThemeIcon('package');
      this.contextValue = 'leitnerBox';

      this.command = {
        command: 'anki.openStudy',
        title: 'Study Leitner Box',
        arguments: [undefined, boxNumber]
      };
    }
  }
}

export class DeckTreeProvider implements vscode.TreeDataProvider<DeckTreeItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<DeckTreeItem | undefined | void> = new vscode.EventEmitter<DeckTreeItem | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<DeckTreeItem | undefined | void> = this._onDidChangeTreeData.event;

  constructor(private storage: AnkiStorage) {}

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: DeckTreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: DeckTreeItem): Thenable<DeckTreeItem[]> {
    const decks = this.storage.getDecks();
    const stats = this.storage.getOverallStats();

    if (decks.length === 0) {
      const emptyItem = new DeckTreeItem(
        'No decks imported yet',
        vscode.TreeItemCollapsibleState.None,
        'empty'
      );
      emptyItem.description = 'Click "Import .apkg" below';
      emptyItem.iconPath = new vscode.ThemeIcon('cloud-upload');
      emptyItem.command = {
        command: 'anki.importDeck',
        title: 'Import Deck'
      };
      return Promise.resolve([emptyItem]);
    }

    // 1. Root Level
    if (!element) {
      const items: DeckTreeItem[] = [];

      // Streak status item
      const statsItem = new DeckTreeItem(
        `Streak: ${stats.streakDays} days`,
        vscode.TreeItemCollapsibleState.None,
        'stat'
      );
      statsItem.description = `${stats.todayReviews} reviews today`;
      items.push(statsItem);

      // Collapsible Books Section
      const totalWords = decks.reduce((acc, d) => acc + d.cardCount, 0);
      const booksHeader = new DeckTreeItem(
        'Books',
        vscode.TreeItemCollapsibleState.Expanded,
        'booksRoot'
      );
      booksHeader.description = `${decks.length} books (${totalWords} words)`;
      items.push(booksHeader);

      // Collapsible Leitner Boxes Section
      const leitnerHeader = new DeckTreeItem(
        'Leitner Boxes',
        vscode.TreeItemCollapsibleState.Expanded,
        'leitnerRoot'
      );
      leitnerHeader.description = 'Spaced Repetition';
      items.push(leitnerHeader);

      return Promise.resolve(items);
    }

    // 2. Books Children
    if (element.itemType === 'booksRoot') {
      const items: DeckTreeItem[] = decks.map(deck =>
        new DeckTreeItem(deck.name, vscode.TreeItemCollapsibleState.None, 'deck', deck)
      );
      return Promise.resolve(items);
    }

    // 3. Leitner Boxes Children
    if (element.itemType === 'leitnerRoot') {
      const boxes = this.storage.getLeitnerBoxes();
      const items: DeckTreeItem[] = boxes.map(b => {
        const bItem = new DeckTreeItem(
          b.name,
          vscode.TreeItemCollapsibleState.None,
          'leitnerBox',
          undefined,
          b.box
        );
        bItem.description = `${b.totalCards} words [${b.intervalDesc}]`;
        bItem.tooltip = `${b.name}\nInterval: ${b.intervalDesc}\nTotal Cards: ${b.totalCards}`;
        return bItem;
      });
      return Promise.resolve(items);
    }

    return Promise.resolve([]);
  }
}
