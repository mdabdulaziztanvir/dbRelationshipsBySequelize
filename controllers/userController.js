import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/UserModel.js";
import { Op } from "sequelize";
import { ProfileModel } from "../models/ProfileModel.js";
import { BlogModel } from "../models/BlogModel.js";

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;
  try {
    const exist = await UserModel.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });
    if (exist) return res.status(200).json({ message: "exists" });
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await UserModel.create(
      {
        username,
        email,
        password: hashedPassword,
        Profile: {
          bio: "df",
        },
      },
      { include: [{ model: ProfileModel }] }
    );
    const { password: _, ...safeuser } = user.toJSON();
    return res
      .status(201)
      .json({ message: "user created successful", user: safeuser });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const user = await UserModel.findOne({
      where: {
        [Op.and]: [{ username }, { email }],
      },
    });

    if (!user) return res.status(401).json({ message: "Unauthorized" });

    const matchedPassword = await bcrypt.compare(password, user.password);
    if (!matchedPassword)
      return res.status(401).json({ message: "not authenticated" });
    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const { password: _, ...safeLogin } = user.toJSON();
    return res
      .status(200)
      .json({ message: "found", user: safeLogin, accessToken });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};
// get user all data
export const getUserAllData = async (req, res) => {
  const id = req.params.id;
  try {
    const userAllData = await UserModel.findOne({
      where: { id },
      include: [{ model: ProfileModel }, { model: BlogModel }],
    });
    if (!userAllData)
      return res.status(400).json({ message: "not user data found" });
    const { password: _, ...safeData } = userAllData.toJSON();
    return res.status(200).json({ message: "user all data", safeData });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};
