import express from "express"; 

import {importVideosFromYT, getVideosByPlaylist, toggleWatched } from "../controllers/Video.controller.js"
import verifyToken from "../middleware/auth.js";

const router = express.Router(); 


router.post("/videos/:playlistId/import", verifyToken, importVideosFromYT);
router.get("/videos/:playlistId/get", verifyToken, getVideosByPlaylist);
router.patch("/videos/:videoId/toggle", verifyToken, toggleWatched);

export default router