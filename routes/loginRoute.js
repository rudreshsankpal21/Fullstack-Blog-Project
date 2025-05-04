const express = require("express");

const loginRoute = express.Router();
loginRoute
  .route("/auth/login")
  .get((req, res) => {
    res.json({ message: "Login" });
  })
  .post((req, res) => {
    res.send("POST login Route");
  });

module.exports = loginRoute;
