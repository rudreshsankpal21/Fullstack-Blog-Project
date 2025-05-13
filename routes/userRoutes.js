const express = require("express");
const {
  getUserProfile,
  editUserProfile,
} = require("../controllers/userController");
const { ensureAuthenticated } = require("../middlewares/auth");
const userRoutes = express.Router();

// Rendering user profile
userRoutes.get("/profile", ensureAuthenticated, getUserProfile);

// Rendering edit profile page
userRoutes.get("/edit", ensureAuthenticated, editUserProfile);
module.exports = userRoutes;
