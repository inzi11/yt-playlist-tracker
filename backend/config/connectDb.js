import mongoose from "mongoose";
import env from "./env.config.js";

export const connectDb = async () => {
    try {
        mongoose.connect(env.uri);
        console.log("MongoDb connected Successfully!");
    } catch (error) {
        console.error("MongoDb connection failed", error.message);
        process.exit(1);
    }

}

