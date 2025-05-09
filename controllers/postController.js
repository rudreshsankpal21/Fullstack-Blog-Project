// Rendering post form
exports.getPostForm = (req, res) => {
  res.render("postForm", {
    title: "Create Post",
    user: req.user,
  });
};
