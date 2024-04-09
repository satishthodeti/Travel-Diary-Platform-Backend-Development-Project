const { check } = require("express-validator");

  exports.userNameCheck = check("userName")
  .notEmpty()
  .withMessage("userName is required")
  .isString()
  .withMessage("userName must be string")
  .trim();

  exports.userEmailCheck = check("userEmail")
  .notEmpty()
  .withMessage("userEmail is required")
  .isString()
  .withMessage("userEmail must be string")
  .trim();

  exports.userPasswordCheck = check("userPassword")
  .notEmpty()
  .withMessage("userPassword is required")
  .isString()
  .withMessage("userPassword must be string")
  .trim();

  exports.productNameCheck = check("productName")
  .notEmpty()
  .withMessage("productName is required")
  .isString()
  .withMessage("productName must be string")
  .trim();

  exports.priceCheck = check("price")
  .notEmpty()
  .withMessage("price is required")
  .isString()
  .withMessage("price must be string")
  .trim();

  exports.descriptionCheck = check("description")
  .notEmpty()
  .withMessage("description is required")
  .isString()
  .withMessage("description must be string")
  .trim();

  exports.idCheck = check("id")
  .notEmpty()
  .withMessage("userId is required")
  .isInt()
  .withMessage("userId must be integer");

  exports.userIdCheck = check("userId")
  .notEmpty()
  .withMessage("userId is required")
  .isInt()
  .withMessage("userId must be integer");

  exports.wishlistIdCheck = check("wishlistId")
  .notEmpty()
  .withMessage("wishlistId is required")
  .isInt()
  .withMessage("wishlistId must be integer");
  