
const userServices = require("../services/user.service");
const responseJson = require("../healpers/response");
const errorResponseJson = require("../healpers/errorResponse");
const { cookieName } = require("../config");

exports.userSignup = async(req, res) =>{
    try {
        const result = await userServices.insertUser(req.body);
        const data = await responseJson(200, "new User Created Successfully", [], result);
        return res.status(200).json(data);
      } catch (error) {
        const data = await  errorResponseJson(error)
        return  res.status(500).json(data)  
      }
}

exports.forgetPassword = async(req, res) =>{
  try {
      const result = await userServices.forgetPassword(req.body);
      const data = await responseJson(200, "user password upadted Successfully", [], result);
      return res.status(200).json(data);
    } catch (error) {
      const data = await  errorResponseJson(error)
      return  res.status(500).json(data)  
    }
}

exports.userLogin = async(req, res) =>{
  try {
    const result = await userServices.userLogin(req.body);
    let data;
    if (result.token) { 
      data = await responseJson(200, "use Login in Successfully ", [], {token:result.token,...result.data});
      res.cookie('token', result.token, { httpOnly: true, maxAge: 3600000, sameSite: 'none', secure: true  }); 

    return res.status(200).json(data);
    } else {
      data = await responseJson(401, "unAuthorized", [], result);
    return res.status(401).json(data);
    }
  } catch (error) {
     console.dir(error)
    const data = await responseJson(500, "Application Error ", error);
    return res.status(500).json(data);
  }
}

exports.logout = (req, res) => {
  res.clearCookie(cookieName);
  res.send('Cookie cleared');
};

exports.getAllUsers = async (req, res) => {
  try {
    const userId = req.user.user_id;
    let result;
    let data
    if (userId) {
      result = await userServices.getUsers();
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

exports.getUserById = async(req, res) =>{
    try {
        let result;
        let data
        const userId = req.user.user_id;
        if (userId) {
          result = await userServices.getUserById(req.params.id); 
          data = await responseJson(200, "Success", [], result);
        } else {
          data = await responseJson(401, "User not authenticated. Please login again.", [], result);
        }
        return res.status(200).json(data);
      } catch (error) {
        const data = await  errorResponseJson(error)
        return  res.status(500).json(data)  
      }
}

exports.updateUserById = async(req, res) =>{
    try {
        let result;
        let data
        const userId = req.user.user_id;
        if (userId) {
           result = await userServices.updateUserById(req.body); 
          data = await responseJson(200, "user updated Successfully", [], result);
        } else {
          data = await responseJson(401, "User not authenticated. Please login again.", [], result);
        }
     return res.status(200).json(data);
      } catch (error) {
        const data = await  errorResponseJson(error)
        return  res.status(500).json(data)  
      }
}

exports.deleteUserById = async(req, res) =>{
    try {
      let result;
      let data
      const userId = req.user.user_id;
      if (userId) {
         result = await userServices.deleteUserById(req.params.id); 
        data = await responseJson(200, "user deleted Successfully", [], result);
      } else {
        data = await responseJson(401, "User not authenticated. Please login again.", [], result);
      }
     return res.status(200).json(data);
      } catch (error) {
        const data = await  errorResponseJson(error)
        return  res.status(500).json(data)  
      }
}