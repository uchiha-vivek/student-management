const Booking = require("../models/Booking");

exports.bookAppointment = async (req, res) => {
  try {
    const { professorId, slot } = req.body;
    const booking = await Booking.create({ studentId: req.user.id, professorId, slot });
    res.status(201).json({ booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findByIdAndUpdate(bookingId, { status: "cancelled" }, { new: true });
    res.json({ booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const bookings = await Booking.find({ studentId: req.user.id, status: "booked" });
    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
