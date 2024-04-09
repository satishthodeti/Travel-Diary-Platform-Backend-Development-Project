const wishlistRepository = require("../respositories/wishlist.respository");

async function insertWishlistItem(body, userId) {
    try {
        const result = await wishlistRepository.insertWishlistItem(body, userId);
        return result;
    } catch (error) {
        throw(error);
    }
}

async function getUserWishlist(userId) {
    try {
        const result = await wishlistRepository.getUserWishlist(userId);
        return result;
    } catch (error) {
        throw(error);
    }
}

async function deleteWishlistItemById(wishlistId, userId) {
    try {
        const result = await wishlistRepository.deleteWishlistItemById(wishlistId, userId);
        return result;
    } catch (error) {
        throw(error);
    }
}

module.exports = { insertWishlistItem, getUserWishlist, deleteWishlistItemById };
