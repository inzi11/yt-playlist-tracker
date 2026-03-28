import { Video } from "../models/Video.models.js";
import { Playlist } from "../models/Playlist.model.js";

const importVideosFromYT = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const userId = req.user.id;

    // check for playlist
    const ytPlaylist = await Playlist.findOne({
      _id: playlistId,
      userId,
    });

    if (!ytPlaylist) {
      return res.status(403).json({
        message: "You don't have access to this playlist",
      });
    }

    // Fetch Videos

    let allVideos = [];
    let nextPageToken = null;

    do {
      const data = await getVideosData(
        ytPlaylist.youtubePlaylistId,
        nextPageToken
      );

      nextPageToken = data.nextPageToken;

      const videos = data.items.map((item) => ({
        playlistId: ytPlaylist._id,
        youtubeVideoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails,
        position: item.snippet.position,
      }));

      allVideos.push(...videos);
    } while (nextPageToken);


    console.log("here's all of the video data", allVideos);

    await Video.insertMany(allVideos, { ordered: false });

    return res.status(201).json({
      message: "Videos imported Successfully",
      count: allVideos.length,
      data
    });
  }
  catch (error) {
    if (error.code === 11000) {
      return res.status(201).json({
        message: "Videos imported (duplicates skipped)",
      });}
      
            console.error(error);
      res.status(500).json({ message: "Failed to import videos" });
  }
};

const getVideosByPlaylist = async (req, res) => {
  try {


  const {playlistId} = req.params; 
  const userId = req.user.id;

  // verify the playlist

    const isValidPlaylist = await Playlist.findOne({ _id: playlistId, userId });
    

    console.log(isValidPlaylist); 

  if (!isValidPlaylist) {
    return res.status(403).json({ message: "invalid access for this playlist" }); 
  }

  const playlistVideos = await Video.find({playlistId: playlistId}).sort({position: 1});

  return res.status(200).json({ message: "videos found!", playlistVideos });
    
  } catch (error) {

    console.error(error.message);
    return res.status(500).json({ message: "Failed to fetch the videos" }); 
    
  }

};

const toggleWatched = async (req, res) => {

  try {

  const {videoId} = req.params;

  const video = await Video.findById(videoId);

  if (!video) {
    return res.status(404).json({message: "video not found"})
  }

  video.watched = !video.watched; 
    
  await video.save();

  return res.status(202).json({ message: "video watched is updated", video });
    
  } catch (error) {
    console.error("unable to toggle"); 

    return res.status(500).json({message : "failed to update the watched"})
  }
  

};

const updateNotes = (req, res) => {};

export { importVideosFromYT, getVideosByPlaylist, toggleWatched, updateNotes };
