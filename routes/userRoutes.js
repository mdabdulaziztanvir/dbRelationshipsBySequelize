import express from "express";
import {
  createUser,
  getUserAllData,
  loginUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create-user", createUser);
// login
router.post("/login", loginUser);
router.get("/user-data/:id", getUserAllData);
export default router;
