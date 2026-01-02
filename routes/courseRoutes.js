import express from "express";
import { createCourse } from "../controllers/courseController.js";
const router = express.Router();
router.post("/create-course", createCourse);
export default router;
