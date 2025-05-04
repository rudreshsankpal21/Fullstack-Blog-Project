const express = require("express");

const registerRoute = express.Router();
registerRoute
  .route("/auth/register")
  .get((req, res) => {
    res.render("register");
  })
  .post((req, res) => {
    res.send("POST register Route");
  });

module.exports = registerRoute;
