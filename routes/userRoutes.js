const express = require("express");
const {
  getUserProfile,
  editUserProfile,
  updateUserProfile,
} = require("../controllers/userController");
const { ensureAuthenticated } = require("../middlewares/auth");
const upload = require("../config/multer");
const userRoutes = express.Router();

// Rendering user profile
userRoutes.get("/profile", ensureAuthenticated, getUserProfile);

// Rendering edit profile page
userRoutes.get("/edit", ensureAuthenticated, editUserProfile);

// update profile route
userRoutes.post(
  "/edit",
  ensureAuthenticated,
  upload.single("profilePicture"),
  updateUserProfile
);

module.exports = userRoutes;
