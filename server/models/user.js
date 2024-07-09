const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: false },
    location: { type: String, required: false },
    age: { type: Number, required: false },
    work: { type: String, required: false },
    dob: { type: String, required: false },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
