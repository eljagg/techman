// Spaced repetition scheduling (a simplified SM-2).
// Grades: again | hard | good | easy. Returns the new card state.

const DAY = 86_400_000;

export function schedule(state, grade, now = new Date()) {
  let { reps = 0, ease = 2.5, interval_days: interval = 0, lapses = 0 } = state || {};

  if (grade === 'again') {
    return {
      reps: 0,
      ease: Math.max(1.3, ease - 0.2),
      interval_days: 0,
      lapses: lapses + 1,
      due_at: new Date(now.getTime() + 10 * 60_000),
    };
  }

  reps += 1;
  if (reps === 1) {
    interval = grade === 'easy' ? 3 : 1;
  } else if (reps === 2) {
    interval = grade === 'hard' ? 2 : grade === 'easy' ? 6 : 3;
  } else {
    const factor = grade === 'hard' ? 1.2 : grade === 'easy' ? ease * 1.3 : ease;
    interval = Math.max(interval + 1, Math.round(interval * factor));
  }
  if (grade === 'hard') ease = Math.max(1.3, ease - 0.15);
  if (grade === 'easy') ease = ease + 0.15;

  return {
    reps,
    ease,
    interval_days: interval,
    lapses,
    due_at: new Date(now.getTime() + interval * DAY),
  };
}

export const GRADES = ['again', 'hard', 'good', 'easy'];
