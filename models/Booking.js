const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  professorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  slot: { type: Date, required: true },
  status: { type: String, enum: ["booked", "cancelled"], default: "booked" },
});

module.exports = mongoose.model("Booking", bookingSchema);
