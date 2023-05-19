const express = require("express");
const {
  getAllEvents,
  addEvent,
  editEvent,
  getEvent,
  deleteEvent,
} = require("../controller/eventController");
const { isAuth } = require("../utils/middleware");

const router = express.Router();

router.get("/", isAuth, getAllEvents);
router.post("/add", isAuth, addEvent);
router.put("/edit/:id", isAuth, editEvent);
router.get("/:id", isAuth, getEvent);
router.delete("/delete/:id", isAuth, deleteEvent);

module.exports = router;
