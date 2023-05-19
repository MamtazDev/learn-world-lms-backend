const express = require("express");
const {
  getAllCourse,
  addCourse,
  editCourse,
  getCourse,
  deleteCourse,
} = require("../controller/courseController");

const router = express.Router();

router.get("/", getAllCourse);
router.post("/add", addCourse);
router.put("/edit/:id", editCourse);
router.get("/:id", getCourse);
router.delete("/delete/:id", deleteCourse);

module.exports = router;
