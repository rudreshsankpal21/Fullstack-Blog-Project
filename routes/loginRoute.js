const express = require("express");

const loginRoute = express.Router();
loginRoute
  .route("/auth/login")
  .get((req, res) => {
    res.render("login");
  })
  .post((req, res) => {
    // Implemanting login logic
  });

module.exports = loginRoute;
