import express from "express";
import VideoController from "../controllers/Video.controller.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.get("/videos/:playlistId", verifyToken, VideoController.listAllVideos);
router.get("videos/:videoId", verifyToken, VideoController.getVideo);

export default router;
