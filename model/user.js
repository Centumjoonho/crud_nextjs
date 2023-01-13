import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  avatar: String,
  date: String,
  comments: String,
});

const Users = models.user || model("user", userSchema);
export default Users;
