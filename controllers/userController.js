const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Post = require("../models/Post");
const Files = require("../models/File");

// get user profile
exports.getUserProfile = asyncHandler(async (req, res) => {
  // find the user
  const user = await User.findById(req.user._id).select("-password");

  if (!user) {
    return res.render("login", {
      title: "Login",
      user: req.user,
      error: "User not found",
    });
  }

  // Fetch users posts
  const posts = await Post.find({ author: req.user._id }).sort({
    createdAt: -1,
  });
  res.render("profile", {
    title: "Profile",
    user,
    posts,
    error: "",
    success: "",
    postCount: posts.length,
  });
});
