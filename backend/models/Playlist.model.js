import mongoose from "mongoose";

const PlaylistSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },
    category: {
      type: String, 
      default: "Not set"
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
      }
    },
    itemCount: {
      type: Number, 
      default: 0, 
    }, 
    youtubePlaylistId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


PlaylistSchema.index(
  { UserId: 1, youtubePlaylistId: 1 },
  { unique: true }
);

export const Playlist = mongoose.model("Playlist", PlaylistSchema);

