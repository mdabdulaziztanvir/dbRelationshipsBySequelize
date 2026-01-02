import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const BlogModel = sequelize.define(
  "Blog",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "user does not provide any content",
    },
  },
  { timestamps: true }
);
