const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: String,
    default: false,
  },
  marchant: {
    type: Schema.Types.ObjectId,
    ref: "Marchant",
    default: null,
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: "member",
    enum: ["admin", "member", "marcheant"],
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExperies: {
    type: Date,
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ("User", userSchema);
