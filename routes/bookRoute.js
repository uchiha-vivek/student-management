const express = require("express");
const { bookAppointment, cancelAppointment, getAppointments } = require("../controllers/bookingController");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");

router.post("/", authMiddleware, bookAppointment);
router.delete("/:bookingId", authMiddleware, cancelAppointment);
router.get("/", authMiddleware, getAppointments);

module.exports = router;
