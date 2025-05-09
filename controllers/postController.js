// Rendering post form
exports.getPostForm = (req, res) => {
  res.render("newPost", {
    title: "Create Post",
    user: req.user,
  });
};
