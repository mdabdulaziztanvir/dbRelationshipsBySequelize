import express from "express";
import { createBlog } from "../controllers/blogController.js";
import { checkLogin } from "../middlewares/userAuthentication.js";

const router = express.Router();
router.post("/create-post", checkLogin, createBlog);
export default router;
