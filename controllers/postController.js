const Files = require("../models/File");
const Post = require("../models/Post");

// Rendering post form
exports.getPostForm = (req, res) => {
  res.render("newPost", {
    title: "Create Post",
    user: req.user,
    error: "",
    success: "",
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
    author: req.use._id,
    images,
  });

  await newPost.save();

  res.render("newPost", {
    title: "Create Post",
    user: req.user,
    success: "Post created successfully",
  });
};
