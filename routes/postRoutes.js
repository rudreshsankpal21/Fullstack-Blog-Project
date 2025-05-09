const express = require("express");
const { getPostForm, createPost } = require("../controllers/postController");
const postRoutes = express.Router();

// Get Post form route
postRoutes.get("/add", getPostForm);

//Creating new post route
postRoutes.post("/posts", createPost);
module.exports = postRoutes;
