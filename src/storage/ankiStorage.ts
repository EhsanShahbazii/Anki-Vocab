import * as fs from 'fs';
import * as path from 'path';
import { AnkiCard, AnkiDeck, ReviewLog } from '../types/anki';
import { SM2Scheduler } from '../scheduler/sm2';

export interface StorageData {
  version: number;
  lastImported?: number;
  decks: AnkiDeck[];
  cards: AnkiCard[];
  reviews: ReviewLog[];
}

export class AnkiStorage {
  private baseDir: string;
  private dataFile: string;
  private mediaDir: string;
  private data: StorageData = {
    version: 1,
    decks: [],
    cards: [],
    reviews: []
  };
  private isLoaded = false;

  constructor(baseDir: string) {
    this.baseDir = baseDir;
    this.dataFile = path.join(baseDir, 'anki_collection.json');
    this.mediaDir = path.join(baseDir, 'media');
  }

  private wordIndex = new Map<string, AnkiCard>();

  public getMediaDirectory(): string {
    return this.mediaDir;
  }

  public async initialize(): Promise<void> {
    await fs.promises.mkdir(this.baseDir, { recursive: true });
    await fs.promises.mkdir(this.mediaDir, { recursive: true });

    if (fs.existsSync(this.dataFile)) {
      try {
        const content = await fs.promises.readFile(this.dataFile, 'utf8');
        this.data = JSON.parse(content);
      } catch (err) {
        console.error('Failed to load anki storage data, initializing empty:', err);
      }
    }
    this.rebuildIndex();
    this.isLoaded = true;
  }

  private rebuildIndex() {
    this.wordIndex.clear();
    for (const card of this.data.cards) {
      if (card.word) {
        const key = card.word.trim().toLowerCase();
        if (!this.wordIndex.has(key)) {
          this.wordIndex.set(key, card);
        }
      }
    }
  }

  public findWord(word: string): AnkiCard | undefined {
    if (!word) return undefined;
    const clean = word.trim().toLowerCase().replace(/[^a-z]/g, '');
    return this.wordIndex.get(clean);
  }

  public getRandomWord(): AnkiCard | undefined {
    if (this.data.cards.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * this.data.cards.length);
    return this.data.cards[randomIndex];
  }

  public async save(): Promise<void> {
    const tempFile = `${this.dataFile}.tmp`;
    const json = JSON.stringify(this.data, null, 2);
    await fs.promises.writeFile(tempFile, json, 'utf8');
    await fs.promises.rename(tempFile, this.dataFile);
    this.rebuildIndex();
  }

  public async saveImportedData(decks: AnkiDeck[], cards: AnkiCard[]): Promise<void> {
    this.data.decks = decks;
    this.data.cards = cards;
    this.data.lastImported = Date.now();
    await this.save();
  }

  public getDecks(): AnkiDeck[] {
    // Recompute current counts based on card states
    const now = Date.now();
    const deckMap = new Map<number, AnkiDeck>();

    for (const d of this.data.decks) {
      deckMap.set(d.id, {
        ...d,
        cardCount: 0,
        newCount: 0,
        dueCount: 0,
        learnedCount: 0
      });
    }

    for (const card of this.data.cards) {
      let deck = deckMap.get(card.deckId);
      if (!deck) {
        deck = {
          id: card.deckId,
          name: card.deckName,
          cardCount: 0,
          newCount: 0,
          dueCount: 0,
          learnedCount: 0
        };
        deckMap.set(card.deckId, deck);
      }
      deck.cardCount++;
      if (card.queue === 'new') {
        deck.newCount++;
      } else if (SM2Scheduler.isCardDue(card, now)) {
        deck.dueCount++;
      } else {
        deck.learnedCount++;
      }
    }

    return Array.from(deckMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  public getCards(deckId?: number): AnkiCard[] {
    if (deckId !== undefined) {
      return this.data.cards.filter(c => c.deckId === deckId);
    }
    return this.data.cards;
  }

  public getDueCards(deckId?: number, limit = 50): AnkiCard[] {
    const now = Date.now();
    const candidateCards = deckId !== undefined
      ? this.data.cards.filter(c => c.deckId === deckId)
      : this.data.cards;

    // Prioritize learning cards, then review cards, then new cards
    const learningOrDue = candidateCards.filter(c => c.queue !== 'new' && SM2Scheduler.isCardDue(c, now));
    const newCards = candidateCards.filter(c => c.queue === 'new');

    const result = [...learningOrDue, ...newCards];
    return result.slice(0, limit);
  }

  public static getCardLeitnerBox(card: AnkiCard): number {
    if (card.queue === 'new' || card.queue === 'learning' || card.queue === 'relearning' || card.interval <= 1) {
      return 1;
    } else if (card.interval <= 4) {
      return 2;
    } else if (card.interval <= 10) {
      return 3;
    } else if (card.interval <= 30) {
      return 4;
    } else {
      return 5;
    }
  }

  public getLeitnerBoxes(deckId?: number): { box: number; name: string; intervalDesc: string; totalCards: number; dueCards: number }[] {
    const now = Date.now();
    const cards = deckId !== undefined ? this.data.cards.filter(c => c.deckId === deckId) : this.data.cards;
    
    const boxes = [
      { box: 1, name: 'Box 1: Daily', intervalDesc: '1 day', totalCards: 0, dueCards: 0 },
      { box: 2, name: 'Box 2: 3-Day', intervalDesc: '3-4 days', totalCards: 0, dueCards: 0 },
      { box: 3, name: 'Box 3: Weekly', intervalDesc: '1 week', totalCards: 0, dueCards: 0 },
      { box: 4, name: 'Box 4: Bi-weekly', intervalDesc: '2 weeks', totalCards: 0, dueCards: 0 },
      { box: 5, name: 'Box 5: Mastered', intervalDesc: '1+ month', totalCards: 0, dueCards: 0 },
    ];

    for (const card of cards) {
      const bIndex = AnkiStorage.getCardLeitnerBox(card) - 1;
      if (bIndex >= 0 && bIndex < 5) {
        boxes[bIndex].totalCards++;
        if (SM2Scheduler.isCardDue(card, now)) {
          boxes[bIndex].dueCards++;
        }
      }
    }

    return boxes;
  }

  public getCardsByLeitnerBox(boxNumber: number, deckId?: number, limit = 50): AnkiCard[] {
    const now = Date.now();
    const candidateCards = deckId !== undefined
      ? this.data.cards.filter(c => c.deckId === deckId)
      : this.data.cards;

    const inBox = candidateCards.filter(c => AnkiStorage.getCardLeitnerBox(c) === boxNumber);
    // Sort due cards first
    inBox.sort((a, b) => {
      const aDue = SM2Scheduler.isCardDue(a, now);
      const bDue = SM2Scheduler.isCardDue(b, now);
      if (aDue && !bDue) return -1;
      if (!aDue && bDue) return 1;
      return a.due - b.due;
    });

    return inBox.slice(0, limit);
  }

  public getCardById(cardId: number): AnkiCard | undefined {
    return this.data.cards.find(c => c.id === cardId);
  }

  public async updateCardRating(
    cardId: number,
    rating: 1 | 2 | 3 | 4,
    studyMode: 'flashcard' | 'typing' | 'listening' = 'flashcard'
  ): Promise<AnkiCard | undefined> {
    const cardIndex = this.data.cards.findIndex(c => c.id === cardId);
    if (cardIndex === -1) return undefined;

    const card = this.data.cards[cardIndex];
    const prevInterval = card.interval;
    const prevEase = card.easeFactor;

    const scheduleUpdate = SM2Scheduler.scheduleCard(card, rating);
    const updatedCard: AnkiCard = {
      ...card,
      ...scheduleUpdate,
      lastReviewed: Date.now()
    };

    this.data.cards[cardIndex] = updatedCard;

    // Record review log
    this.data.reviews.push({
      cardId,
      rating,
      reviewedAt: Date.now(),
      previousInterval: prevInterval,
      newInterval: updatedCard.interval,
      previousEase: prevEase,
      newEase: updatedCard.easeFactor,
      studyMode
    });

    await this.save();
    return updatedCard;
  }

  public getOverallStats(): {
    totalCards: number;
    newCount: number;
    dueCount: number;
    learnedCount: number;
    totalReviews: number;
    todayReviews: number;
    streakDays: number;
  } {
    const now = Date.now();
    let newCount = 0;
    let dueCount = 0;
    let learnedCount = 0;

    for (const card of this.data.cards) {
      if (card.queue === 'new') {
        newCount++;
      } else if (SM2Scheduler.isCardDue(card, now)) {
        dueCount++;
      } else {
        learnedCount++;
      }
    }

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const todayTimestamp = startOfToday.getTime();

    const todayReviews = this.data.reviews.filter(r => r.reviewedAt >= todayTimestamp).length;

    // Calculate streak
    const reviewDays = new Set(
      this.data.reviews.map(r => {
        const d = new Date(r.reviewedAt);
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      })
    );

    let streakDays = 0;
    const checkDate = new Date();
    while (true) {
      const key = `${checkDate.getFullYear()}-${checkDate.getMonth() + 1}-${checkDate.getDate()}`;
      if (reviewDays.has(key)) {
        streakDays++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else if (streakDays === 0) {
        // Today might not have reviews yet, check yesterday
        checkDate.setDate(checkDate.getDate() - 1);
        const yKey = `${checkDate.getFullYear()}-${checkDate.getMonth() + 1}-${checkDate.getDate()}`;
        if (reviewDays.has(yKey)) {
          streakDays++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      } else {
        break;
      }
    }

    return {
      totalCards: this.data.cards.length,
      newCount,
      dueCount,
      learnedCount,
      totalReviews: this.data.reviews.length,
      todayReviews,
      streakDays
    };
  }

  public get7DayAnalytics(): { date: string; dayName: string; total: number; good: number; again: number }[] {
    const days: { date: string; dayName: string; total: number; good: number; again: number }[] = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      d.setHours(0, 0, 0, 0);
      const startMs = d.getTime();
      const endMs = startMs + 86400000;
      
      const dayReviews = this.data.reviews.filter(r => r.reviewedAt >= startMs && r.reviewedAt < endMs);
      const goodCount = dayReviews.filter(r => r.rating >= 3).length;
      const againCount = dayReviews.filter(r => r.rating < 3).length;

      days.push({
        date: `${d.getMonth() + 1}/${d.getDate()}`,
        dayName: dayNames[d.getDay()],
        total: dayReviews.length,
        good: goodCount,
        again: againCount
      });
    }
    return days;
  }
}
