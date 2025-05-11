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

// Creating new post
exports.createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  // Validation
  if (!req.files || req.files.length === 0) {
    return res.render("newPost", {
      title: "Create Post",
      user: req.user,
      error: "Atleast one Image is Mandatory",
      success: "",
    });
  }

  // Save the files into DB
  const images = await Promise.all(
    req.files.map(async (file) => {
      // Save the images into the DB
      const newFile = new Files({
        url: file.path,
        public_id: file.filename,
        uploaded_by: req.user._id,
      });
      await newFile.save();

      return {
        url: newFile.url,
        public_id: newFile.public_id,
      };
    })
  );

  // Create the post
  const newPost = new Post({
    title,
    content,
    author: req.user._id,
    images,
  });

  await newPost.save();

  res.render("newPost", {
    title: "Create Post",
    user: req.user,
    error: "",
    success: "Post created successfully",
  });
});

// Get all posts
exports.getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("author", "username");

  res.render("posts", {
    title: "Posts",
    posts,
    user: req.user,
    success: "",
    error: "",
  });
});

// Get post by id
exports.getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate("author", "username")
    .populate("comments");
  res.render("post", {
    title: "Post",
    post,
    user: req.user,
    success: "",
    error: "",
  });
});
