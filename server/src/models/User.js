// server/src/models/User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["STUDENT", "ADMIN"],
      default: "STUDENT",
    },
    semester: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
