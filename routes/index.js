const express = require("express");
const userRouter = require("./userRoutes");
const wishListRouter = require("./wishlistRoutes");
const blogRouter = require("./blogRoutes");
const { validateToken } = require('../healpers/token.Validator')
const router = express.Router();

router.use('/user', userRouter);
router.use('/wishlist', validateToken, wishListRouter);
router.use('/blog', validateToken,  blogRouter);

module.exports = router;