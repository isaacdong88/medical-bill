const mongoose = require("mongoose");

const billsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    review: {
      type: String,
      // required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Bills = mongoose.model("Bills", billsSchema);

module.exports = Bills;
