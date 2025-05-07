require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/authRoutes");
const app = express();
const port = process.env.PORT || 5000;

// middleware for passing form data
app.use(express.urlencoded({ extended: true }));

// EJS
app.set("view engine", "ejs");

//Routes

app.use("/auth", userRoutes);

//Connect DB
mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => {
    app.listen(port, () => {
      console.log("DB connected Successfully");

      console.log(`http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("DB connection failed");
  });
