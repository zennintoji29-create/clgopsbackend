import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CollegeOps API running");
});

// routes (we will add gradually)
app.use("/api/auth", require("./routes/auth.routes"));

module.exports = app;
app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/notes", require("./routes/notes.routes"));
app.use("/api/assignments", require("./routes/assignment.routes"));
app.use("/api/announcements", require("./routes/announcement.routes"));
