import express from "express"
import playlistControllers from "../controllers/Playlist.controller.js"
import verifyToken from "../middleware/auth.js";

const router = express.Router(); 

router.get("/", verifyToken, playlistControllers.getAllUserPlaylists);
router.post("/add", verifyToken, playlistControllers.importPlaylistDetailsFromYT);
router.delete("/delete/:playlistId", verifyToken, playlistControllers.deletedPlaylist);


export default router; 