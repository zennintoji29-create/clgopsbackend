// server/src/controllers/auth.controller.js

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, semester } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "User exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      semester,
    });

    res.status(201).json({
      success: true,
      data: {
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
        accessToken: generateToken(user),
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Registration failed",
      error: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
        accessToken: generateToken(user),
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: err.message,
    });
  }
};
