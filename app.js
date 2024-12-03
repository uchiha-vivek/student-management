const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoute");
const availabilityRoutes = require("./routes/availableRoute");
const bookingRoutes = require("./routes/bookRoute");

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for cross-origin requests

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://<your_username>:<your_password>@cluster0.8yubopf.mongodb.net/neha",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
  
// Routes
app.use("/api/auth", authRoutes); // Authentication and registration
app.use("/api/availability", availabilityRoutes); // Availability-related routes
app.use("/api/bookings", bookingRoutes); // Booking-related routes

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the College Appointment System API");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

module.exports = app;
