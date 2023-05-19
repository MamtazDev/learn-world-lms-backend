const express = require("express");
const {
  getAllReviews,
  addReview,
  deleteReview,
  editReview,
  getReview,
} = require("../controller/reviewController");
const { isAuth } = require("../utils/middleware");

const router = express.Router();

router.get("/", isAuth, getAllReviews);
router.post("/add", isAuth, addReview);
router.put("/edit/:id", isAuth, editReview);
router.get("/:id", isAuth, getReview);
router.delete("/delete/:id", isAuth, deleteReview);

module.exports = router;
