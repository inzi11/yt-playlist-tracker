import express from "express"; 

import {importVideosFromYT, getVideosByPlaylist, toggleWatched } from "../controllers/Video.controller.js"
import verifyToken from "../middleware/auth.js";

const router = express.Router(); 


router.post("/:playlistId/import", verifyToken, importVideosFromYT);
router.get("/:playlistId/get", verifyToken, getVideosByPlaylist);
router.patch("/:videoId/toggle", verifyToken, toggleWatched);

export default router