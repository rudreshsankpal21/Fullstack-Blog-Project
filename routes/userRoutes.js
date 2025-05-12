const express = require("express");
const { getUserProfile } = require("../controllers/userController");
const { ensureAuthenticated } = require("../middlewares/auth");
const userRoutes = express.Router();

// Rendering user profile
userRoutes.get("/profile", ensureAuthenticated, getUserProfile);

module.exports = userRoutes;
