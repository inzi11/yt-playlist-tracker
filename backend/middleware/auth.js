import jwt from "jsonwebtoken";
import env from "../config/env.config.js"
import AppError from "../utils/appError.utils.js";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return  next(new AppError("No token provided", 401));
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, env.jwtSecret);

    req.user = decoded;
    next();

  } catch (error) {
    return next(new AppError("Invalid or expired token", 403))
  }
};

export default verifyToken;