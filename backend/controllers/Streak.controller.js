import StreakService from "../services/Streaks.service.js";

export const watchedVideo = async (req, res) => {
  const userId = req.user.id;

  console.log(req);

  const streak = await StreakService.getCurrentStreaks(userId);

  res.json({
    success: true,
    streak,
  });
};

export default { watchedVideo };
