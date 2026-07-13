import StreaksRepository from "../repository/Streaks.repository.js";

const getCurrentStreaks = async (userId) => {
  const streak = await StreaksRepository.findStreak(userId);

  if (!streak) {
    streak = await StreaksRepository.createStreak(userId);
  }

  const today = new Date();

  // if watched today
  if (streak.lastWatchedDate?.toDateString() === today.toDateString()) {
    return streak;
  }

  const newCount = streak.currentStreak + 1;

  return await StreaksRepository.updateStreak(userId, {
    currentStreak: newCount,
    lastWatchedDate: today,
    longestStreak: Math.max(streak.longestStreak, newCount),
  });
};

export default { getCurrentStreaks };
