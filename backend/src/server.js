import dotenv from "dotenv";
import  env  from "../config/env.config.js";
import { connectDb } from "../config/connectDb.js";
import express from "express";
import cors from "cors";
import userRoutes from "../routes/UserRoutes.js";
import playlistRoutes from "../routes/PlaylistRoutes.js"
import VideoRoutes from "../routes/VideoRoutes.js"
import errorHandler from "../middleware/error.middleware.js";

const app = express();

app.use(cors());

// json middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// loading routes
app.use("/api/users", userRoutes);
app.use("/api/playlist", playlistRoutes);
app.use("/api/videos", VideoRoutes);


// error middleware should be last
app.use(errorHandler);

connectDb();

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
