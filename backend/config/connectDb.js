import mongoose from "mongoose";
import env from "./env.config.js";

let isConnected = false;

export const connectDb = async () => {
  try {

    if (isConnected) {
      console.log("Database already connected");
      return;
    }

    const conn = await mongoose.connect(env.uri);

    isConnected = true;

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {

    console.error("MongoDB connection error:");
    console.error(error);

    process.exit(1);
  }
};