import { Video } from "../models/Video.models.js";

const getVideoById = (id) => {
  return Video.findById(id);
};

const deleteVideoByIds = async (playlistId, id) => {
  return Video.findOneAndDelete({ playlistId, _id: id });
};

const addVideo = async (payload) => {
  return Video.create(payload);
};

const getAllPlaylistVideos = async (playlistId) => {
  return Video.find(playlistId);
};

const insertMany = (videos) => Video.insertMany(videos);

export default {
  getVideoById,
  deleteVideoByIds,
  addVideo,
  getAllPlaylistVideos,
  insertMany,
};
