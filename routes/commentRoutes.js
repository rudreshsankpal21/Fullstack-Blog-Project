const express = require("express");
const { ensureAuthenticated } = require("../middlewares/auth");
const {
  addComment,
  getCommentForm,
} = require("../controllers/commentController");
const commentRoutes = express.Router();

// add comment
commentRoutes.post("/posts/:id/comments", ensureAuthenticated, addComment);

// get comment form
commentRoutes.get("/comments/:id/edit", getCommentForm);
module.exports = commentRoutes;
