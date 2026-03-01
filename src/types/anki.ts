/**
 * Core type definitions for the VS Code Anki extension
 */

export type CardRating = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy
export type CardQueue = 'new' | 'learning' | 'review' | 'relearning';

export interface AnkiCard {
  id: number;
  noteId: number;
  deckId: number;
  deckName: string;
  queue: CardQueue;
  reps: number;
  lapses: number;
  interval: number; // in days (or fractions of days for learning steps)
  easeFactor: number; // default 2.5 (2500 in Anki DB)
  due: number; // timestamp in milliseconds or due day index
  lastReviewed?: number; // timestamp in milliseconds

  // Parsed note fields tailored for vocabulary & language learning
  word: string;
  ipa?: string;
  meaning?: string;
  example?: string;
  image?: string; // filename of image
  sound?: string; // filename of word sound
  soundMeaning?: string; // filename of meaning sound
  soundExample?: string; // filename of example sound
  
  // Raw fields dictionary
  fields: Record<string, string>;
  tags: string[];
}

export interface AnkiDeck {
  id: number;
  name: string;
  description?: string;
  cardCount: number;
  newCount: number;
  dueCount: number;
  learnedCount: number;
}

export interface ReviewLog {
  cardId: number;
  rating: CardRating;
  reviewedAt: number;
  previousInterval: number;
  newInterval: number;
  previousEase: number;
  newEase: number;
  studyMode: 'flashcard' | 'typing' | 'listening';
}

export interface StudySessionStats {
  cardsReviewed: number;
  againCount: number;
  hardCount: number;
  goodCount: number;
  easyCount: number;
  startTime: number;
  endTime?: number;
}

export interface ImportProgress {
  stage: 'reading_zip' | 'parsing_database' | 'extracting_media' | 'saving' | 'done';
  percent: number;
  message: string;
  totalCards?: number;
  totalMedia?: number;
  extractedMedia?: number;
}
