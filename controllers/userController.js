const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Post = require("../models/Post");
const cloudinary = require("../config/cloudinary");
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

// get Edit user profile form
exports.editUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (!user) {
    return res.render("login", {
      title: "Login",
      user: req.user,
      error: "User not found",
      success: "",
    });
  }
  res.render("editProfile", {
    title: "Edit Profile",
    user,
    error: "",
    success: "",
  });
});

// update profile
exports.updateUserProfile = asyncHandler(async (req, res) => {
  const { username, email, bio } = req.body;
  const user = await User.findById(req.user._id).select("-password");
  if (!user) {
    return res.render("login", {
      title: "login",
      user: req.user,
      error: "User not found",
    });
  }

  user.username = username || user.username;
  user.email = email || user.email;
  user.bio = bio || user.bio;

  // Handle file only if uploaded
  if (req.file) {
    // Delete old img from cloudinary
    if (user.profilePicture && user.profilePicture.public_id) {
      await cloudinary.uploader.destroy(user.profilePicture.public_id);
    }
    //create new file
    const file = new Files({
      url: req.file.path,
      public_id: req.file.filename,
      uploaded_by: req.user._id,
    });

    await file.save();

    user.profilePicture = {
      url: file.url,
      public_id: file.public_id,
    };
  }

  await user.save();
  res.render("home", {
    title: "Edit Profile",
    user,
    error: "",
    success: "Profile updated successfully",
  });
});
