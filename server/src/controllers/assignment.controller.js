const Assignment = require("../models/Assignment");

exports.createAssignment = async (req, res) => {
  const assignment = await Assignment.create({
    ...req.body,
    createdBy: req.user._id,
  });

  res.status(201).json(assignment);
};

exports.getAssignments = async (req, res) => {
  const assignments = await Assignment.find()
    .populate("subjectId", "name")
    .sort({ deadline: 1 });

  res.json(assignments);
};
