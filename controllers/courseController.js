import { CourseModel } from "../models/CourseModel.js";

export const createCourse = async (req, res) => {
  const { title, description } = req.body;

  try {
    if (!title || !description)
      return res.status(400).json({ message: "all fields are mandatory" });
    const courseData = await CourseModel.create({ title, description });
    return res
      .status(201)
      .json({ message: "course created successfully", courseData });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};
