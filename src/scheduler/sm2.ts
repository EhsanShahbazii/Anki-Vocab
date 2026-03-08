import { AnkiCard, CardRating } from '../types/anki';

/**
 * SuperMemo SM-2 algorithm implementation customized for Anki-style flashcards.
 */
export class SM2Scheduler {
  private static readonly MIN_EASE = 1.3;
  private static readonly DEFAULT_EASE = 2.5;

  /**
   * Calculates the next review parameters for a card based on the user's rating.
   *
   * Ratings:
   * 1 = Again: Failed recall. Card resets to learning queue.
   * 2 = Hard: Recalled with difficulty. Interval grows slowly.
   * 3 = Good: Normal recall. Interval multiplied by ease factor.
   * 4 = Easy: Effortless recall. Interval multiplied by ease factor + bonus.
   */
  public static scheduleCard(
    card: AnkiCard,
    rating: CardRating,
    now: number = Date.now()
  ): {
    queue: AnkiCard['queue'];
    interval: number;
    easeFactor: number;
    due: number;
    reps: number;
    lapses: number;
  } {
    let { queue, interval, easeFactor, reps, lapses } = card;

    if (!easeFactor || easeFactor < this.MIN_EASE) {
      easeFactor = this.DEFAULT_EASE;
    }

    if (queue === 'new' || queue === 'learning' || queue === 'relearning') {
      return this.scheduleLearningCard(card, rating, now);
    }

    // Review card flow
    reps += 1;

    switch (rating) {
      case 1: { // Again
        lapses += 1;
        queue = 'relearning';
        interval = 1; // 1 day
        easeFactor = Math.max(this.MIN_EASE, easeFactor - 0.2);
        break;
      }
      case 2: { // Hard
        queue = 'review';
        interval = Math.max(1, Math.round(interval * 1.2));
        easeFactor = Math.max(this.MIN_EASE, easeFactor - 0.15);
        break;
      }
      case 3: { // Good
        queue = 'review';
        if (interval === 1) {
          interval = 6;
        } else {
          interval = Math.max(1, Math.round(interval * easeFactor));
        }
        break;
      }
      case 4: { // Easy
        queue = 'review';
        if (interval === 1) {
          interval = 4;
        } else {
          interval = Math.max(1, Math.round(interval * easeFactor * 1.3));
        }
        easeFactor += 0.15;
        break;
      }
    }

    const due = now + interval * 24 * 60 * 60 * 1000;

    return {
      queue,
      interval,
      easeFactor: Number(easeFactor.toFixed(2)),
      due,
      reps,
      lapses
    };
  }

  private static scheduleLearningCard(
    card: AnkiCard,
    rating: CardRating,
    now: number
  ) {
    let { easeFactor, reps, lapses } = card;
    if (!easeFactor) {
      easeFactor = this.DEFAULT_EASE;
    }

    let interval = 1;
    let queue: AnkiCard['queue'] = 'learning';

    switch (rating) {
      case 1: // Again: repeat in session (10 mins)
        interval = 0.007; // ~10 minutes
        queue = 'learning';
        lapses += 1;
        break;
      case 2: // Hard: repeat in session (~12 hours)
        interval = 0.5;
        queue = 'learning';
        break;
      case 3: // Good: graduate to review (1 day)
        interval = 1;
        queue = 'review';
        reps += 1;
        break;
      case 4: // Easy: graduate directly with bonus (4 days)
        interval = 4;
        queue = 'review';
        reps += 1;
        easeFactor += 0.15;
        break;
    }

    const due = now + Math.round(interval * 24 * 60 * 60 * 1000);

    return {
      queue,
      interval: Number(interval.toFixed(3)),
      easeFactor: Number(easeFactor.toFixed(2)),
      due,
      reps,
      lapses
    };
  }

  /**
   * Check if a card is currently due for study.
   */
  public static isCardDue(card: AnkiCard, now: number = Date.now()): boolean {
    if (card.queue === 'new') {
      return true;
    }
    return card.due <= now;
  }
}
