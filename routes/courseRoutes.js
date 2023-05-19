const express = require("express");
const {
  getAllCourse,
  addCourse,
  editCourse,
  getCourse,
  deleteCourse,
} = require("../controller/courseController");
const { isAuth } = require("../utils/middleware");

const router = express.Router();

router.get("/", isAuth, getAllCourse);
router.post("/add", isAuth, addCourse);
router.put("/edit/:id", isAuth, editCourse);
router.get("/:id", isAuth, getCourse);
router.delete("/delete/:id", isAuth, deleteCourse);

module.exports = router;
