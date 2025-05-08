const express = require("express");
const {
  getLogin,
  getRegister,
  register,
  login,

  logout,
} = require("../controllers/authController");
const userRoutes = express.Router();

// Render Login page
userRoutes.get("/login", getLogin);

// Logic for user login
userRoutes.post("/login", login);

// Render register page
userRoutes.get("/register", getRegister);

//Logic for user Registration
userRoutes.post("/register", register);

//Logout Route
userRoutes.get("/logout", logout);
module.exports = userRoutes;
