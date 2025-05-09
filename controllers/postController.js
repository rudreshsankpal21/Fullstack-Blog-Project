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
  console.log(req.file, "File uploaded");

  const newPost = await Post.create({
    title,
    content,
    author: req.user._id,
  });
  console.log(newPost);
  res.redirect("/posts");
};
