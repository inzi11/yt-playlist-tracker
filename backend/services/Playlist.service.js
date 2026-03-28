import PlaylistRepository from "../repository/Playlist.repository.js";
import AppError from "../utils/appError.utils.js";
import YoutubeService from "./Youtube.service.js"

const importPlaylist = async (ytUrl, userId) => {
    const playlistId = YoutubeService.getPlaylistId(ytUrl);

    const isPlaylistExists = await PlaylistRepository.checkPlaylistExistance(playlistId, userId);

    if (isPlaylistExists) {
        throw new AppError("playlist Already Exists", 409);
    }

    const ytResponse = await YoutubeService.getPlaylistData(playlistId);

    // if (!ytResponse) {
    //     console.log("No playlist found")
    //     throw new AppError("No Playlsit found", 404)
    // }

    if (!ytResponse || !ytResponse.items || ytResponse.items.length === 0) {
    throw new AppError("Playlist not found on YouTube", 404);
    }

    console.log(ytResponse);

    const playlistDetails = ytResponse.items[0];

    const playlistPayload = {
        userId: userId,
         youtubePlaylistId: playlistId,
         title: playlistDetails?.snippet.title, 
         itemCount: playlistDetails?.contentDetails.itemCount,
         thumbnail: playlistDetails?.snippet.thumbnails,
        description: playlistDetails?.snippet.localized.description
    }

    const createdPlaylist = await PlaylistRepository.createNewPlaylist(playlistPayload); 

    return createdPlaylist;
}

const findPlaylists = async (userId) => {
    const allPlaylist = await PlaylistRepository.getAllPlaylist(userId);

    return allPlaylist; 
}

const deleteSinglePlaylist = async (playlistId, userId) => {

    const deletePlaylist = await PlaylistRepository.deletePlaylistById(playlistId, userId) // again remember im not deleting the videos store only the playlist (have to map db both sides?)

    if (deletePlaylist.deletedCount === 0) {
        throw new AppError("Error in deleting the playlist", 409)
    }

    return deletePlaylist;

}


export default {importPlaylist, findPlaylists , deleteSinglePlaylist}