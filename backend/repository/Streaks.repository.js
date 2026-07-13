import { Streaks } from "../models/Streaks.model.js";

const createStreak = async (userId) => {
  return await Streaks.create({
    userId,
  });
};

const findStreak = async (userId) => {
  return await Streaks.findOne({ userId: userId });
};

const updateStreak = async (streakData, userId) => {
  return await Streaks.findOneAndUpdate(
    userId,
    {
      streakData,
    },
    { new: true },
  );
};

export default { createStreak, findStreak, updateStreak };
