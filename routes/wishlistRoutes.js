const express = require("express");
const wishlistController = require("../controllers/wishlist.controller");
const { validate } = require('../healpers/validator')
const {addWishListValidation, wishlistIdValidation} =  require("../validation/expressValidation")
const router = express.Router();
const {createWishlistItem, getUserWishlist, deleteWishlistItemById} = wishlistController;

router.post("/insertItem", addWishListValidation(), validate, createWishlistItem);
router.get("/list", getUserWishlist);
router.delete("/delete/:wishlistId", wishlistIdValidation(),  validate, deleteWishlistItemById);

module.exports = router;