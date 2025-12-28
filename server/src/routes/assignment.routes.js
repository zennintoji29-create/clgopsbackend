const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const {
  createAssignment,
  getAssignments,
} = require("../controllers/assignment.controller");

router.get("/", auth, getAssignments);
router.post("/", auth, role("admin"), createAssignment);

module.exports = router;
