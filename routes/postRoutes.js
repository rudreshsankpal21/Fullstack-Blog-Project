const express = require("express");
const { getPostForm, createPost } = require("../controllers/postController");
const upload = require("../config/multer");
const { ensureAuthenticated } = require("../middlewares/isAuthenticated");
const postRoutes = express.Router();

// Get Post form route
postRoutes.get("/add", getPostForm);

//Creating new post route
postRoutes.post(
  "/add",
  ensureAuthenticated,
  upload.array("images", 10),
  createPost
);

module.exports = postRoutes;
