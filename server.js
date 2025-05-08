require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/authRoutes");
const passport = require("passport");
const passportConfig = require("./config/passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();
const port = process.env.PORT || 5000;

// middleware for passing form data
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: "itachi uchiha",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGOOSE_URL }),
  })
);

// Passport configuration
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

// EJS
app.set("view engine", "ejs");

//Routes
// Home Route
app.get("/", (req, res) => {
  res.render("home");
});
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
