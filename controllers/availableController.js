const Availability = require("../models/Available");

exports.setAvailability = async (req, res) => {
  try {
    const { slots } = req.body;
    const availability = await Availability.findOneAndUpdate(
      { professorId: req.user.id },
      { slots },
      { upsert: true, new: true }
    );
    res.json({ availability });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAvailability = async (req, res) => {
  try {
    const { professorId } = req.params;
    const availability = await Availability.findOne({ professorId });
    res.json({ availability: availability ? availability.slots : [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
