const User = require("../models/User");
const Note = require("../models/Note");
const Assignment = require("../models/Assignment");

exports.getAdminStats = async (req, res) => {
  const students = await User.countDocuments({ role: "student" });
  const notes = await Note.countDocuments();
  const assignments = await Assignment.countDocuments();

  res.json({
    totalStudents: students,
    totalNotes: notes,
    totalAssignments: assignments,
  });
};
