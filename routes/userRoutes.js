const express = require("express");
const userController = require("../controllers/user.controller");
const { validate, isAdmin, isAuth } = require('../healpers/validator');
const { validateToken } = require('../healpers/token.Validator');
const {addUserValidation, userLogInValidation, updateUserValidation, userIdValidation} = require("../validation/expressValidation");
const router = express.Router();
const { userSignup, userLogin, logout, forgetPassword, getAllUsers, getUserById, updateUserById, deleteUserById } = userController;

router.post("/signup", addUserValidation(), validate, userSignup);
router.post("/login", userLogInValidation(), validate, userLogin);
router.post("/logout", logout);
router.post("/forgetPassword", userLogInValidation(), validate, forgetPassword);
router.get("/allUsers", validateToken, validate, isAdmin, getAllUsers);
router.get("/:id", validateToken, validate, getUserById);
router.put("/update", validateToken, updateUserValidation(), validate, isAuth, updateUserById);
router.delete("/delete/:id", validateToken, userIdValidation(), validate,  isAuth, deleteUserById);

module.exports = router;
