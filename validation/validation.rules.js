const { check } = require("express-validator");

exports.tunCheck = check("tun")
  .notEmpty()
  .withMessage("tun is required")
  .isString()
  .withMessage("tun must be a string")
  .trim();

  exports.entryIdCheck = check("entryId")
  .notEmpty()
  .withMessage("entryId is required")
  .isInt()
  .withMessage("entryId must be integer");

exports.userNameCheck = check("userName")
  .notEmpty()
  .withMessage("userName is required")
  .isString()
  .withMessage("userName must be a string")
  .trim();

exports.userEmailCheck = check("userEmail")
  .notEmpty()
  .withMessage("userEmail is required")
  .isEmail()
  .withMessage("Invalid email format")
  .trim();

  
  exports.userIdCheck = check("userId")
  .notEmpty()
  .withMessage("userId is required")
  .isInt()
  .withMessage("userId must be an integer");

  exports.userPasswordCheck = check("userPassword")
  .notEmpty()
  .withMessage("userPassword is required")
  .isString()
  .withMessage("userPassword must be string")
  .trim();

exports.userFullNameCheck = check("userFullName")
  .notEmpty()
  .withMessage("userFullName is required")
  .isString()
  .withMessage("userFullName must be a string")
  .trim();

exports.dateOfBirthCheck = check("dateOfBirth")
  .notEmpty()
  .withMessage("dateOfBirth is required")
  .isDate()
  .withMessage("Invalid date format");

exports.profilePictureCheck = check("profilePicture")
  .notEmpty()
  .withMessage("profilePicture is required")
  .isURL()
  .withMessage("Invalid URL format")
  .trim();

exports.isAdminCheck = check("isAdmin")
  .notEmpty()
  .withMessage("isAdmin must be a boolean value")
  .isBoolean()
  .withMessage("isAdmin must be a true/false");

  exports.titleCheck = check("title")
  .notEmpty()
  .withMessage("title is required")
  .isString()
  .withMessage("title must be a string")
  .trim();

exports.descriptionCheck = check("description")
  .notEmpty()
  .withMessage("description is required")
  .isString()
  .withMessage("description must be a string")
  .trim();

exports.dateCheck = check("date")
  .notEmpty()
  .withMessage("date is required")
  .isISO8601()
  .toDate()
  .withMessage("Invalid date format");

exports.locationCheck = check("location")
  .notEmpty()
  .withMessage("location is required")
  .isString()
  .withMessage("location must be a string")
  .trim();

  exports.photosCheck = check("photos")
    .optional()
    .isArray({ min: 1 })
    .withMessage("photos must be an array")
    .custom((photos) => {
      if (!photos.every((photo) => typeof photo === "string")) {
        throw new Error("photos must be an array of strings (image URLs)");
      }
      return true;
    });
  

  exports.idCheck = check("id")
  .notEmpty()
  .withMessage("id is required")
  .isInt()
  .withMessage("id must be an integer");