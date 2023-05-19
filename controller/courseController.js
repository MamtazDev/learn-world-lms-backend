const Courses = require("../models/Courses");

const addCourse = async (req, res) => {
  try {
    const newCourse = new Courses(req.body);
    await newCourse.save();
    res.status(200).send({
      message: "Course Added Successfully!",
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCourse = async (req, res) => {
  try {
    const courses = await Courses.find({});
    res.status(200).send({
      data: courses,
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const editCourse = async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);

    if (course) {
      course.name = req.body.name;
      course.description = req.body.description;
      course.instructor = req.body.instructor;
      course.price = req.body.price;
      course.rating = req.body.rating;
      course.review = req.body.review;
      course.category = req.body.category;

      await course.save();

      res.status(200).send({
        data: course,
        message: "Courese updated successfully!",
        status: 200,
      });
    } else {
      res.status(401).send({
        message: "There is no such course.",
        status: 200,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);
    res.status(200).send(course);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    await Courses.findOneAndDelete({ _id: req.params.id })
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
  addCourse,
  getAllCourse,
  editCourse,
  getCourse,
  deleteCourse,
};
