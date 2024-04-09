const wishlistQueries = {
    insertWishlistItem: `INSERT INTO xct.wishlists(
        user_id, product_name, price, description)
        VALUES ($1, $2, $3, $4) RETURNING *;`,

    getUserWishlist: `SELECT wishlist_id, user_id, product_name, price, description, created_at, update_at
        FROM xct.wishlists 
        WHERE user_id = $1 AND is_delete = false;`,

    deleteWishlistItemById: `UPDATE xct.wishlists
        SET is_delete = true, update_at = CURRENT_TIMESTAMP
        WHERE wishlist_id = $1 AND user_id = $2 AND is_delete = false
        RETURNING *;`
};

module.exports = wishlistQueries;
