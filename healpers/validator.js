const {validationResult} = require('express-validator');
const responseJson = require("./response");

const validate = async(req,res,next)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    } 
    const response = await responseJson(400, "Bad Request", errors.errors, undefined);
    res.status(400).json(response)
}

module.exports = {
    validate
}