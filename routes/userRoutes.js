import express from "express";
import {
  courseEnrollent,
  createUser,
  getUserAllData,
  loginUser,
} from "../controllers/userController.js";
import { checkLogin } from "../middlewares/userAuthentication.js";

const router = express.Router();

router.post("/create-user", createUser);
// login
router.post("/login", loginUser);
router.post("/enroll-course", checkLogin, courseEnrollent);
router.get("/user-data/:id", getUserAllData);
export default router;
