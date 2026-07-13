import express from "express";
import StreakController from "../controllers/Streak.controller.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.get("/streak", verifyToken, StreakController.watchedVideo);

export default router;
