import { BlogModel } from "../models/BlogModel.js";

export const createBlog = async (req, res) => {
  const { content } = req.body;

  try {
    if (!content)
      return res.status(400).json({ message: "no content provided" });
    const blogData = await BlogModel.create({ content, userId: req.user.id });
    return res.status(201).json({
      message: `new blogs added with blogId: ${blogData.id}`,
      blogData,
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};
