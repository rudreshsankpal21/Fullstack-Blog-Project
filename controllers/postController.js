const asyncHandler = require("express-async-handler");
const Files = require("../models/File");
const Post = require("../models/Post");

// Rendering post form
exports.getPostForm = asyncHandler((req, res) => {
  res.render("newPost", {
    title: "Create Post",
    user: req.user,
    error: "",
    success: "",
  });
});
