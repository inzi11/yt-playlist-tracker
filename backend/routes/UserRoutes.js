import express from "express";
import { Userlogin, UserSignup } from "../controllers/User.controller.js";

const router = express.Router();

router.post("/users/signup", UserSignup);
router.post("/users/login", Userlogin);

export default router;