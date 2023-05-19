const Event = require("../models/Event");

const addEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(200).send({
      message: "Event added successfully!",
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).send({
      data: events,
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const editEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (event) {
      event.title = req.body.title;
      event.location = req.body.title;
      event.time = req.body.time;
      event.date = req.body.date;

      await event.save();

      res.status(200).send({
        data: event,
        message: "Event updated successfully",
        status: 200,
      });
    } else {
      res.status(401).send({
        message: "There is no such event.",
        status: 200,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    await Event.findOneAndDelete({ _id: req.params.id })
      .exec()
      .then((result) => {
        res.status(200).send({
          message: `${result.title} is successfully removed!`,
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
  addEvent,
  getAllEvents,
  getEvent,
  editEvent,
  deleteEvent
};
