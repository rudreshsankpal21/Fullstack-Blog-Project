require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const loginRoute = require("./routes/loginRoute");
const registerRoute = require("./routes/registerRoute");
const app = express();
const port = process.env.PORT || 5000;

// middleware for passing form data
app.use(express.urlencoded({ extended: true }));

// EJS
app.set("view engine", "ejs");

//Home Route
app.get("/", (req, res) => {
  res.send("New Blog Project Starting");
});

//Login Route
app.get("/auth/login", loginRoute);
app.post("/auth/login", loginRoute);

//Register Route
app.get("/auth/register", registerRoute);
app.post("/auth/register", registerRoute);

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
