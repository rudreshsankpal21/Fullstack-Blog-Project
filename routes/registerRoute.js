const express = require("express");
const User = require("../models/User");
const registerRoute = express.Router();
registerRoute
  .route("/auth/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(async (req, res) => {
    // Main logic for user Registration
    const { username, email, password } = req.body;
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (user) {
        res.send("User already exists");
      } else {
        // Create new user
        const newUser = new User({
          username,
          email,
          password,
        });
      }
    } catch (error) {}
  });

module.exports = registerRoute;
