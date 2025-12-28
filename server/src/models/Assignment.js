const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    deadline: { type: Date, required: true },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assignment", assignmentSchema);
