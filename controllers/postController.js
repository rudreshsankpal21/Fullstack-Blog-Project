const Post = require("../models/Post");

// Rendering post form
exports.getPostForm = (req, res) => {
  res.render("newPost", {
    title: "Create Post",
    user: req.user,
  });
};

// Creating new post
exports.createPost = async (req, res) => {
  const { title, content } = req.body;
};
