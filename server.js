const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

const courseRoutes = require("./routes/courseRoutes");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

connectDB();

// routes
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);

// testing api
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
