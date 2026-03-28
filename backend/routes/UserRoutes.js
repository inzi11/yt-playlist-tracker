import express from "express";
import { Userlogin, UserSignup } from "../controllers/User.controller.js";

const router = express.Router();

router.post("/signup", UserSignup);
router.post("/login", Userlogin);

export default router;