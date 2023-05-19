const Reviews = require("../models/Reviews");

const addReview = async (req, res) => {
  try {
    const newReview = new Reviews(req.body);
    await newReview.save();
    res.status(200).send({
      message: "Review added successfully!",
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find({});
    res.status(200).send({
      data: reviews,
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getReview = async (req, res) => {
  try {
    const review = Reviews.findById(req.params.id);
    res.status(200).send(review);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const editReview = async (req, res) => {
  try {
    const review = await Reviews.findById(req.params.id);

    if (review) {
      review.user = req.body.user;
      review.comment = req.body.comment;
      review.course = req.body.course;

      await review.save();

      res.status(200).send({
        data: review,
        message: "Review updated successfully",
        status: 200,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    await Reviews.findOneAndDelete({ _id: req.params.id })
      .exec()
      .then((result) => {
        res.status(200).send({
          message: `${result.name} is successfully removed!`,
          status: 200,
        });
      })
      .catch((err) => {
        res.send({
          message: err.message,
        });
      });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addReview,
  getAllReviews,
  getReview,
  editReview,
  deleteReview,
};
