import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("df");
});
const PORT = process.env.PORT;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`bakcend on live with http://192.168.88.10:${PORT}`);
});
