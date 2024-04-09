CREATE SCHEMA IF NOT EXISTS xct;
 
CREATE TABLE IF NOT EXISTS xct.users
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS xct.wishlists 
(
    wishlist_id SERIAL PRIMARY KEY,
    crated_by INT REFERENCES xct.users(user_id) ON DELETE CASCADE,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    is_delete BOOLEAN DEFAULT false
);

CREATE SCHEMA IF NOT EXISTS blog;

CREATE TABLE IF NOT EXISTS blog.blog_posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES xct.users,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    publish_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    category VARCHAR(100),
    tags TEXT[],
    views INT DEFAULT 0,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_is_deleted ON blog.blog_posts (is_deleted);


ALTER TABLE xct.wishlists
ADD COLUMN user_id INT  REFERENCES xct.users(user_id);
