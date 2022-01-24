const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      // required: true,
      unique: true,
    },
    userType: {
      // here specify if admin or intern
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    }
  },
);

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;