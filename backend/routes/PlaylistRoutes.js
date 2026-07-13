import express from "express"
import playlistControllers from "../controllers/Playlist.controller.js"
import verifyToken from "../middleware/auth.js";

const router = express.Router(); 

router.get("/playlists", verifyToken, playlistControllers.getAllUserPlaylists);
router.post("/playlists", verifyToken, playlistControllers.importPlaylistDetailsFromYT);
router.delete("/playlists/:playlistId", verifyToken, playlistControllers.deletedPlaylist);


export default router; 