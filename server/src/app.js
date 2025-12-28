import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "https://collegeops.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use(express.json());

// health check
app.get("/health", (req, res) => {
  res.json({ success: true, message: "CollegeOps API running" });
});

// routes
app.use("/api/auth", authRoutes);

export default app;
