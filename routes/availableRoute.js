const express = require("express");
const { setAvailability, getAvailability } = require("../controllers/availableController");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");

router.post("/", authMiddleware, setAvailability);
router.get("/:professorId", authMiddleware, getAvailability);

module.exports = router;
