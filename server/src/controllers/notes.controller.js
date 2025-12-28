const Note = require("../models/Note");

exports.createNote = async (req, res) => {
  const { title, subjectId, pdfUrl } = req.body;

  const note = await Note.create({
    title,
    subjectId,
    pdfUrl,
    uploadedBy: req.user._id,
  });

  res.status(201).json(note);
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find()
    .populate("subjectId", "name semester")
    .sort({ createdAt: -1 });

  res.json(notes);
};
