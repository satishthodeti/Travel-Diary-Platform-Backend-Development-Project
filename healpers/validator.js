const {validationResult} = require('express-validator');
const responseJson = require("./response");
const diaryEntryServices = require("../services/diaryEntry.service");

const validate = async(req,res,next)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    } 
    const response = await responseJson(400, "Bad Request", errors.errors, undefined);
    res.status(400).json(response)
}

const isAdmin = async(req,res,next)=>{
    const errors = validationResult(req);
    if(errors.isEmpty() && req.user.isAdmin){
        return next();
    } else if (!errors.isEmpty()) {
        const response = await responseJson(400, "Bad Request", errors.errors, undefined);
        return res.status(400).json(response);
    } else {
        const response = await responseJson(401, "Unauthorized", "You are not authorized to perform this action", undefined);
        return res.status(401).json(response);
    }
}

const isAuth = async (req, res, next) => {
    const errors = validationResult(req);
    const id = req?.params?.entryId ? req.params.entryId || req.params.userId : req.body.entryId || req.body.userId;
    const data = await diaryEntryServices.getDiaryEntryById(id);

    if (errors.isEmpty() && (req.user.isAdmin || data.userId === req.user.userId)) {
        return next();
    } else if (!errors.isEmpty()) {
        const response = await responseJson(400, "Bad Request", errors.errors, undefined);
        return res.status(400).json(response);
    } else {
        const response = await responseJson(401, "Unauthorized", "You are not authorized to perform this action", undefined);
        return res.status(401).json(response);
    }
}


module.exports = {
    validate, isAdmin, isAuth
}