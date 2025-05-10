const Files = require("../models/File");
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
  // Validation
  if (!req.files || req.files.length === 0) {
    return res.render("newPost", {
      title: "Create Post",
      use: req.user,
      error: "Atleast one Image is Mandatory",
    });
  }
  const images = await Promise.all(
    req.files.map(async (file) => {
      // Save the images into the DB
      const newFile = new Files({});
    })
  );
};
