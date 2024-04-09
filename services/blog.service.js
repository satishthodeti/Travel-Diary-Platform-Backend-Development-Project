const blogPostRepository = require("../respositories/blog.respositories");
const { mapResponse, mapArrayResponse} = require("../mappers/mapper")

async function createBlogPost(body, user) {
    try {
        const result = await blogPostRepository.createBlogPost(body, user);
        const data = mapResponse(result);
        return data;
    } catch (error) {
        throw error;
    }
}

async function getAllBlogPosts() {
    try {
        const result = await blogPostRepository.getAllBlogPosts();
        const data = mapArrayResponse(result);
        return data;
    } catch (error) {
        throw error;
    }
}

async function getBlogPostById(postId) {
    try {
        const result = await blogPostRepository.getBlogPostById(postId);
        const data = mapResponse(result);
        const  checkDataExist = Object.keys(data).length>0 ? data : 'No Data Found!';
        return checkDataExist;
    } catch (error) {
        throw error;
    }
}

async function updateBlogPostById(body, user) {
    try {
        const result = await blogPostRepository.updateBlogPostById(body, user);
        const data = mapResponse(result);
        return data;
    } catch (error) {
        throw error;
    }
}

async function deleteBlogPostById(params, user) {
    try {
        const result = await blogPostRepository.deleteBlogPostById(params, user);
        const data = mapResponse(result);
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = { createBlogPost, getAllBlogPosts, getBlogPostById, updateBlogPostById, deleteBlogPostById };
