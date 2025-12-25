const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const {
  createAnnouncement,
  getAnnouncements,
} = require("../controllers/announcement.controller");

router.get("/", auth, getAnnouncements);
router.post("/", auth, role("admin"), createAnnouncement);

module.exports = router;
