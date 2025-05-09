const express = require("express");
const { getPostForm, createPost } = require("../controllers/postController");
const upload = require("../config/multer");
const postRoutes = express.Router();

// Get Post form route
postRoutes.get("/add", getPostForm);

//Creating new post route
postRoutes.post("/add", upload.array("images", 10), createPost);

module.exports = postRoutes;
