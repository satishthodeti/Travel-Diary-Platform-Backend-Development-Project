const queries = {
    createBlogPost: `INSERT INTO blog.blog_posts (
        user_id, title, content, author, publish_date, category, tags)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,

    getAllBlogPosts: `SELECT post_id, title, content, author, publish_date, category, tags, views
        FROM blog.blog_posts
        WHERE is_deleted = false;`,

    getBlogPostById: `SELECT post_id, title, content, author, publish_date, category, tags, views
        FROM blog.blog_posts
        WHERE post_id = $1 AND is_deleted = false;`,

    updateBlogPostById: `UPDATE blog.blog_posts
        SET title = $3, content = $4, category = $5, tags = $6, updated_at = CURRENT_TIMESTAMP
        WHERE user_id = $1 AND post_id = $2 AND is_deleted = false
        RETURNING *;`,

    deleteBlogPostById: `UPDATE blog.blog_posts
        SET is_deleted = true, updated_at = CURRENT_TIMESTAMP
        WHERE user_id = $1 AND post_id = $2 AND is_deleted = false
        RETURNING *;`
};

module.exports = queries;