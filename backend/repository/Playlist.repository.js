import {Playlist} from "../models/Playlist.model.js"

const checkPlaylistExistance = async (playlistId, userId) => {
   return await Playlist.findOne({ youtubePlaylistId: playlistId, userId:userId});
}

const createNewPlaylist = async (playlistDetails) => {
    
     // // other way 
    // let newPlaylistDoc = new Playlist({
    //     youtubePlaylistId: playlistData.playlistId, 
    //     title: playlistData.title, 
    //     description: playlistData.description, 
    //     thumbnail: { ...playlistData.thumbnail }, 
    //     totalVideos: playlistData.totalVideos
    // })
    // // need to manually save
    // newPlaylistDoc.save()
    return Playlist.create(playlistDetails)

}

const getAllPlaylist = async (userId) => {
   return await Playlist.find({ userId: userId });
}

const deletePlaylistById = async (id, userId) => {
   return await Playlist.deleteOne({ _id: id, userId: userId });
}



export default { checkPlaylistExistance, createNewPlaylist, getAllPlaylist, deletePlaylistById}