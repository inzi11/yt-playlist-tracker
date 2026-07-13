import VideoService from "../services/Video.service.js";

const listAllVideos = async (req, res, next) => {
  try {
    const allVideos = await VideoService.getAllPlaylistVideos(req?.body ?? "");

    return res.status(200).json({ message: "videos Fetched", data: allVideos });
  } catch (error) {
    console.erorr(error);
    next(error);
  }
};

const getVideo = async (req, res, next) => {
  try {
    const video = await VideoService.getVideo(req?.body ?? "");

    return res.status(200).json({ message: "Video Fetched", data: video });
  } catch (error) {
    console.erorr(error);
    next(error);
  }
};

export default { listAllVideos, getVideo };
