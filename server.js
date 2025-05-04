require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const loginRoute = require("./routes/loginRoute");

const app = express();
const port = process.env.PORT || 5000;

// EJS
app.set("view engine", "ejs");

//Home Route
app.get("/", (req, res) => {
  res.send("New Blog Project Starting");
});

//Login Route
app.get("/auth/login", loginRoute);
app.post("/login", loginRoute);

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
