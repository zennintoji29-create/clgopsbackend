const Announcement = require("../models/Announcement");

exports.createAnnouncement = async (req, res) => {
  const announcement = await Announcement.create({
    ...req.body,
    createdBy: req.user._id,
  });

  res.status(201).json(announcement);
};

exports.getAnnouncements = async (req, res) => {
  const announcements = await Announcement.find()
    .sort({ isPinned: -1, createdAt: -1 });

  res.json(announcements);
};
