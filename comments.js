// Create web server

// Import modules
const express = require("express");
const router = express.Router();
const { Comment } = require("../models/comment.js");
const { User } = require("../models/user.js");
const { Post } = require("../models/post.js");
const { auth } = require("../middleware/auth.js");

// ============================
//         COMMENTS
// ============================

// Create comment
router.post("/:postId", auth, async (req, res) => {
  try {
    // Get user and post
    const user = await User.findById(req.user._id);
    const post = await Post.findById(req.params.postId);

    // Create comment
    const comment = new Comment({