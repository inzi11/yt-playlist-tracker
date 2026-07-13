import PlaylistRepository from "../repository/Playlist.repository.js";
import VideoRepository from "../repository/Video.repository.js";
import YoutubeService from "./Youtube.service.js";
import AppError from "../utils/appError.utils.js";

const normalisedVidDb = (item, playlistId) => ({
  playlistId,
  youtubeVideoId: item.snippet.resourceId.videoId,
  title: item.snippet.title,
  thumbnail: {
    default: item.snippet.thumbnails.default?.url,
    medium: item.snippet.thumbnails.medium?.url,
    high: item.snippet.thumbnails.high?.url,
  },
  description: item.snippet.description,
  position: item.snippet.position,
});

const importVideos = async (playlistId, youtubePlaylistId) => {
  let pageToken;

  do {
    const page = await YoutubeService.getVideosData(
      youtubePlaylistId,
      pageToken,
    );

    const videos = page.items.map((item) => normalisedVidDb(item, playlistId));

    await VideoRepository.insertMany(videos);

    pageToken = page.nextPageToken;
  } while (pageToken);
};

const getAllPlaylistVideos = async (playlistId) => {
  const isExist = await PlaylistRepository.checkPlaylistExistance(playlistId);

  if (!isExist) throw new AppError("Playlist not found", 404);

  return VideoRepository.getAllPlaylistVideos(playlistId);
};

const getVideo = async (videoId) => {
  const isVideoExist = await VideoRepository.getVideoById(videoId);

  if (!isVideoExist) throw new AppError("Video not Found", 404);

  return isVideoExist;
};

export default { importVideos, getAllPlaylistVideos, getVideo };
