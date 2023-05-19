const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("Reviews", reviewSchema);
module.exports = Reviews;
