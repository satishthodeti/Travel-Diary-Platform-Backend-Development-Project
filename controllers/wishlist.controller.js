const wishlistServices = require("../services/wishlist.service");
const responseJson = require("../healpers/response");
const errorResponseJson = require("../healpers/errorResponse");

exports.createWishlistItem = async (req, res) => {
    try {
       let result;
        let data;
        const userId = req.user.user_id;
        if (userId) {
            const result = await wishlistServices.insertWishlistItem(req.body, req.user?.user_id);
            data = await responseJson(200, "Success", [], result);
        } else {
         data = await responseJson(401, "User not authenticated. Please login again.", [], result);
        }
       return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.getUserWishlist = async (req, res) => {
    try {
        let result;
        let data;
        const userId = 9;
        if (userId) {
            const result = await wishlistServices.getUserWishlist(9); 
          data = await responseJson(200, "Success", [], result);
        } else {
          data = await responseJson(401, "User not authenticated. Please login again.", [], result);
        }
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.deleteWishlistItemById = async (req, res) => {
    try {
        let result;
        let data;
        const userId = req.user.user_id;
        if (userId) {
            const result = await wishlistServices.deleteWishlistItemById(req.params.wishlistId, req.user?.user_id);
          data = await responseJson(200, "Wishlist item deleted successfully", [], result);
        } else {
          data = await responseJson(401, "User not authenticated. Please login again.", [], result);
        }
       return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};
