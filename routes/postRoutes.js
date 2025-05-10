const express = require("express");
const { getPostForm, createPost } = require("../controllers/postController");
const upload = require("../config/multer");
const { ensureAuthenticated } = require("../middlewares/auth");
const postRoutes = express.Router();

// Get Post form route
postRoutes.get("/add", ensureAuthenticated, getPostForm);

//Creating new post route
postRoutes.post(
  "/add",
  ensureAuthenticated,
  upload.array("images", 10),
  createPost
);

module.exports = postRoutes;
