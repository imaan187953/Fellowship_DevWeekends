const mongoose = require("mongoose");

const waiterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    shift: {
      type: String,
      enum: ["Morning", "Evening", "Night"],
      required: true,
    },

    experience: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Waiter", waiterSchema);