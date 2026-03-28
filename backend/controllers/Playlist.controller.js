import PlaylistService from "../services/Playlist.service.js";


const importPlaylistDetailsFromYT = async (req, res, next) => {

    try {

        const playlist = await PlaylistService.importPlaylist(req.body.url, req.user.id); 
        return res.status(201).json({ message: "Playlist added Succesfully", playlist });
    
    } catch (error) {
        console.error(error); 
        next(error);
    } 

}

const getAllUserPlaylists = async (req, res, next) => { 
    try {
            const allPlaylist = await PlaylistService.findPlaylists(req.user.id);
    return res.status(200).json({ message: "Successfully Fetched All playlist", allPlaylist }); 
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const deletedPlaylist = async (req, res, next) => {
    try {
        // remember this is the mongodbId and not the ytplaylist id that you're storing
        const { playlistId } = req.params; 
        const userId = req.user.id
        const deletePlaylist = await PlaylistService.deleteSinglePlaylist(playlistId, userId);  // remember currently im only deleting the playlist not the video

        return res.status(200).json({ message: "Playlist Deleted Successfully", deletePlaylist }); 

    } catch (error) {
        console.error(error); 
        next(error);
    }
}


export default {importPlaylistDetailsFromYT, getAllUserPlaylists, deletedPlaylist}