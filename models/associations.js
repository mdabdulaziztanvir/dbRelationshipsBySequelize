import { UserModel } from "./UserModel.js";
import { ProfileModel } from "./ProfileModel.js";

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
