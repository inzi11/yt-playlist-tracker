import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    playlistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Playlist",
      required: true,
    },

    youtubeVideoId: {
      type: String, 
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    thumbnail: {
      default: { type : String},
      medium: { type : String},
      high: { type : String},
    },

    description: {
      type: String, 
      default: ""
    },

    watched: {
      type: Boolean,
      default: false,
    },

    notes: {
      type: String,
      default: "",
    },

    position: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);


videoSchema.index(
  { playlistId: 1, videoId: 1 },
  { unique: true }
);


export const Video =  mongoose.model("Video", videoSchema);
