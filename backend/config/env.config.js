import dotenv from "dotenv"; 


dotenv.config(); 


const env = {
    uri: process.env.MONGO_URI,
    port: process.env.PORT || 2000,
    jwtSecret: process.env.JWT_SECRET_KEY, 
    ytApiKey: process.env.YT_API_V3_KEY
}

export default env;

