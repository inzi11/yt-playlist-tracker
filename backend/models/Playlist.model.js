import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: String,
      default: "Not set",
      trim: true,
    },

    thumbnail: {
      default: {
        url: String,
        width: Number,
        height: Number,
      },

      medium: {
        url: String,
        width: Number,
        height: Number,
      },

      high: {
        url: String,
        width: Number,
        height: Number,
      },

      maxres: {
        url: String,
        width: Number,
        height: Number,
      },
    },

    itemCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    youtubePlaylistId: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

PlaylistSchema.index(
  { userId: 1, youtubePlaylistId: 1 },
  { unique: true }
);

export const Playlist = mongoose.model("Playlist", PlaylistSchema);