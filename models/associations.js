import { UserModel } from "./UserModel.js";
import { ProfileModel } from "./ProfileModel.js";
import { BlogModel } from "./BlogModel.js";
import { CourseModel } from "./CourseModel.js";

// one to one relationships
UserModel.hasOne(ProfileModel, {
  foreignKey: "userId",
  sourceKey: "id", //not mandatory , by default it takes id of the parent
});

ProfileModel.belongsTo(UserModel, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// one to many relationship
UserModel.hasMany(BlogModel, {
  foreignKey: "userId",
  sourceKey: "id",
});
BlogModel.belongsTo(UserModel, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
// many to many relationships
UserModel.belongsToMany(CourseModel, { through: "UserCourses" });
CourseModel.belongsToMany(UserModel, { through: "UserCourses" });
