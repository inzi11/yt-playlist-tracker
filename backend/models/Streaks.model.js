import mongoose from "mongoose";

const StreaksSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    lastWatchedDate: {
      type: Date,
      required: false,
    },
    currentStreak: {
      type: Number,
      default: 0,
    },
    skipStreak: {
      type: Number,
      required: true,
      default: 2,
    },
    longestStreak: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const Streaks = mongoose.model("Streaks", StreaksSchema);
