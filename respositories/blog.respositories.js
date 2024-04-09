const { query } = require("../db");
const blogPostQueries = require("../queries/blog.queries");

async function createBlogPost(body, user) {
    const {title, content, author, publishDate, category, tags} = body;
    const  {user_id} = user;
    try {
        const result = await query(blogPostQueries.createBlogPost, [user_id, title, content, author, publishDate, category, tags]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}


async function getAllBlogPosts() {
    try {
        const result = await query(blogPostQueries.getAllBlogPosts);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function getBlogPostById(postId) {
    try {
        const result = await query(blogPostQueries.getBlogPostById, [postId]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function updateBlogPostById(body, user) {
    const  {user_id} = user;
    const { title, content, category, tags, postId } = body;
    try {
        const result = await query(blogPostQueries.updateBlogPostById, [user_id, postId, title, content, category, tags]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function deleteBlogPostById(params, user) {
    const  {user_id} = user;
    const { postId } = params;
    try {
        const result = await query(blogPostQueries.deleteBlogPostById, [user_id, postId]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = { createBlogPost, getAllBlogPosts, getBlogPostById, updateBlogPostById, deleteBlogPostById };
