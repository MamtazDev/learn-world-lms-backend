const express = require("express");
const {
  getAllReviews,
  addReview,
  deleteReview,
  editReview,
  getReview,
} = require("../controller/reviewController");

const router = express.Router();

router.get("/", getAllReviews);
router.post("/add", addReview);
router.put("/edit/:id", editReview);
router.get("/:id", getReview);
router.delete("/delete/:id", deleteReview);

module.exports = router;
