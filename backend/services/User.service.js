import * as bcrypt from "bcrypt";
import userRepository from "../repository/User.repository.js"
import jwt from "jsonwebtoken";
import env from "../config/env.config.js"
import AppError from "../utils/appError.utils.js";

const signup = async (userInfo) => {

    const { username, email, password } = userInfo; 
    // check for existance in db
    const checkUser = await userRepository.findUserByEmail(email);

        if (checkUser) {
            throw new AppError("user already exists", 409);
        }

    const hashedPassword = await bcrypt.hash(password, 10); 
    
    const payload = {
            username: username, 
            email: email, 
            password: hashedPassword
        }

    const user = await userRepository.createUser(payload);

    return user;
}

const login = async (userDetails) => {
        const { email, password } = userDetails; 

        // find the user using the email 
        const user = await userRepository.findUserByEmail(email); 

        if (!user) {
            throw new AppError("user dont exist", 404);
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password); 

        if (!isPasswordCorrect) {
            throw new Error("invalid password", 400);
        }

        const token = jwt.sign({ id: user._id, username: user.username, email: user.email}, env.jwtSecret, { expiresIn: "4h" });

        return token;


}

export default {signup , login}