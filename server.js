import dotenv from "dotenv";
dotenv.config();
import express from "express";

// imports models
import { sequelize } from "./config/db.js";

import "./models/UserModel.js";
import "./models/ProfileModel.js";
import "./models/BlogModel.js";
// import associations
import "./models/associations.js";
// import routes

import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();
app.use(express.json());

// api creates
app.use("/api", userRoutes);
app.use("/api", blogRoutes);
// db connections
const dbConnection = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("db connection successful");
  } catch (error) {
    console.error("Unable to  connect to the database:", error);
  }
};
dbConnection();
// app start
const PORT = process.env.PORT;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`bakcend on live with http://192.168.88.10:${PORT}`);
});
