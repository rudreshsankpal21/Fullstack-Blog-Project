const express = require("express");
const User = require("../models/User");

const loginRoute = express.Router();
loginRoute
  .route("/auth/login")
  .get((req, res) => {
    res.render("login");
  })
  .post((req, res) => {
    // logic for login
    const { email, password } = req.body;
    try {
      const user = User.findOne({ email });
      const isMatch = User.findOne({ password });
      if (user && isMatch) {
        res.send("User Login successfull");
      } else {
        res.send("User Login Failed");
      }
    } catch (error) {
      res.send(error);
    }
  });

module.exports = loginRoute;
