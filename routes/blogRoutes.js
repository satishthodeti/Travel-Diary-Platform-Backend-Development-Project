const express = require("express");
const blogPostController = require("../controllers/blog.controller");
const { validate } = require('../healpers/validator');
//const { createBlogPostValidation, updateBlogPostValidation, blogPostIdValidation } = require("../validation/expressValidation");
const router = express.Router();
const { createBlogPost, getAllBlogPosts, getBlogPostById, updateBlogPostById, deleteBlogPostById } = blogPostController;

router.post("/create", validate, createBlogPost);
router.get("/all", getAllBlogPosts);
router.get("/get/:postId", validate, getBlogPostById);
router.put("/update/:postId", validate, updateBlogPostById);
router.delete("/delete/:postId", validate, deleteBlogPostById);

module.exports = router;
