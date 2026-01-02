import jwt from "jsonwebtoken";

export const checkLogin = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization)
    return res.status(401).json({ message: "authorization not sent" });
  if (!authorization.startsWith("Bearer"))
    return res.status(401).json({ message: "not valid authorization" });
  const token = authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "toekn not found" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
    };
    next();
  } catch (error) {
    return res.status(400).json({ message: "error", error });
  }
};
