const mongoose = require("mongoose");

const billsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    hospital: {
      type: String,
      required: true,
    },
    servicedate: {
      type: String,
      required: true,
    },
    billamount: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Bills = mongoose.model("Bills", billsSchema);

module.exports = Bills;
