const express = require("express");
const {
  getAllEvents,
  addEvent,
  editEvent,
  getEvent,
  deleteEvent,
} = require("../controller/eventController");

const router = express.Router();

router.get("/", getAllEvents);
router.post("/add", addEvent);
router.put("/edit/:id", editEvent);
router.get("/:id", getEvent);
router.delete("/delete/:id", deleteEvent);

module.exports = router;
