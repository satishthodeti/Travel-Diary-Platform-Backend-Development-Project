const { query } = require("../db");
const wishlistQueries = require("../queries/wishlist.queries");

async function insertWishlistItem(body, userId) {
    try {
        const { productName, price, description } = body;
        const result = await query(wishlistQueries.insertWishlistItem, [userId, productName, price, description]);
        return [...result.rows].shift();
    } catch (error) {
        throw(error);
    }
}

async function getUserWishlist(userId) {
    try {
        const result = await query(wishlistQueries.getUserWishlist, [userId]);
        return result.rows;
    } catch (error) {
        throw(error);
    }
}

async function deleteWishlistItemById(wishlistId, userId) {
    try {
        const result = await query(wishlistQueries.deleteWishlistItemById, [wishlistId, userId]);
        return result.rows;
    } catch (error) {
        throw(error);
    }
}

module.exports = { insertWishlistItem, getUserWishlist, deleteWishlistItemById };
