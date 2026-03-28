import axios from "axios";
import AppError from "../utils/appError.utils.js";
import env from "../config/env.config.js";
const getPlaylistId = (url) => {

  try {
    const playlistId = new URL(url).searchParams.get("list");
  
    if (!playlistId) {
      throw new AppError("invaid Playlist Id", 400);
    }
  
    return playlistId;
  } catch (error) {
      throw new AppError("Invalid playlist URL", 400);
  }
};

const getPlaylistData = async (playlistId) => {
  try {
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlists",
      {
        params: {
          part: "snippet,contentDetails",
          id: playlistId,
          key: env.ytApiKey,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("YouTube API error:", error.response?.data || error.message);
    throw new AppError(`Youtube Api Error while fetching api: ${error.message}`, 502);
  }
};

const getVideosData = async (playlistId, pageToken) => {
  try {
      const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet,contentDetails",
          playlistId,
          maxResults: 50,
          pageToken,
          key: env.ytApiKey,
        },
      }
    );


    return res.data


  } catch (error) {
    console.error("Youtube API Error :", error.response?.data || error.message);
    throw new AppError(`Youtube Api Error while fetching videos: ${error.message}`, 502); // 502 -> internal api failure -remember buddy~
  }
}

export default { getPlaylistId, getPlaylistData, getVideosData };
