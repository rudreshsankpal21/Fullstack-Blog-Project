const express = require("express");
const { getPostForm } = require("../controllers/postController");
const postRoutes = express.Router();

// Get Post form route
postRoutes.get("/add", getPostForm);

module.exports = postRoutes;
