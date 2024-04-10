const express = require("express");
const userRouter = require("./userRoutes");
const diaryEntriesRouter = require("./diaryEntriesRoutes");
const { validateToken } = require('../healpers/token.Validator')
const router = express.Router();

router.use('/user', userRouter);
router.use('/diary/entries', validateToken,  diaryEntriesRouter);

module.exports = router;