const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const {
  createNote,
  getNotes,
} = require("../controllers/notes.controller");

router.get("/", auth, getNotes);
router.post("/", auth, role("admin"), createNote);

module.exports = router;
