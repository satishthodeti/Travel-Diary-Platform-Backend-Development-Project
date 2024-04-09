const blogPostService = require("../services/blog.service");
const responseJson = require("../healpers/response");
const errorResponseJson = require("../healpers/errorResponse");

exports.createBlogPost = async (req, res) => {
    try {
        let result;
        let data;
        if (req.user) {
            result = await blogPostService.createBlogPost(req.body, req.user);
            data = await responseJson(200, "Blog post created successfully", [], result);
        } else {
            data = await responseJson(401, "User not authenticated. Please login again.", [], result);
        }
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.getAllBlogPosts = async (req, res) => {
    try {
        const result = await blogPostService.getAllBlogPosts();
        const data = await responseJson(200, "Success", [], result);
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.getBlogPostById = async (req, res) => {
    try {
        const { postId } = req.params;
        const result = await blogPostService.getBlogPostById(postId);
        const data = await responseJson(200, "Success", [], result);
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.updateBlogPostById = async (req, res) => {
    try {
        const result = await blogPostService.updateBlogPostById(req.body, req.user);
        const data = await responseJson(200, "Blog post updated successfully", [], result);
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.deleteBlogPostById = async (req, res) => {
    try {
        const result = await blogPostService.deleteBlogPostById(req.params, req.user);
        const data = await responseJson(200, "Blog post deleted successfully", [], result);
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};
