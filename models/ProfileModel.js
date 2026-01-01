import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const ProfileModel = sequelize.define("Profile", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  //   userId: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     unique: true,
  //   },
});
