import dotenv from "dotenv";
import env from "../config/env.config.js";
import { connectDb } from "../config/connectDb.js";
import express from "express";
import cors from "cors";
import userRoutes from "../routes/UserRoutes.js";
import playlistRoutes from "../routes/PlaylistRoutes.js";
import VideoRoutes from "../routes/VideoRoutes.js";
import StreakRoutes from "../routes/StreaksRoutes.js";
import errorHandler from "../middleware/error.middleware.js";

const app = express();

app.use(cors());

// json middleware
app.use(express.json());

// disable ETag and prevent clients from caching API responses
app.set("etag", false);
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
});

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// loading routes
app.use("/api", userRoutes);
app.use("/api", playlistRoutes);
app.use("/api", VideoRoutes);
app.use("/api", StreakRoutes);

// error middleware should be last -> next in controller direct us to here after the rout fail
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDb();

    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
