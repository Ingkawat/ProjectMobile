const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  user_name: { type: String },
  password: { type: String },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  image: { type: String },
});

const UserModel = mongoose.model("user", userSchema, "user");

module.exports = UserModel;
