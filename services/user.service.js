const userRepository = require("../respositories/user.respository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authSecret, refreshTokenSecret } = require("../config");

async function insertUser(body){
    try {
      const { userPassword } = body;
      const encryptedPassword = await bcrypt.hash(userPassword, 10);
      body.encryptedPassword = encryptedPassword;
       const result = await userRepository.userInsert(body);
       return result;
    } catch (error) {
       throw(error);
    }
}

async function userLogin(body) {
try {
   const {userEmail, userPassword}  = body;
   const user = await userRepository.findByEmail(userEmail);
   if (user.length > 0) {
     const isSame = await bcrypt.compare(userPassword, user[0].password);
     if (isSame) {
       let token = jwt.sign({ userId: user[0].user_id, username:user[0].username, userEmail}, authSecret, {
         expiresIn: Math.floor(Date.now() / 1000) + 18000,
       });
       const refreshToken = jwt.sign(
          {  userId: user[0].user_id, username:user[0].username, userEmail},
         refreshTokenSecret,
         { expiresIn: "1d" }
       );
       const data = user[0];
       return { token, data, refreshToken };
     } else {
       return {
         data: {
           message: "Wrong password",
         },
       };
     }
   } else {
     return {
       data: {
         message: "Invalid User",
       },
     };
   }
} catch (error) {
   throw(error);
}
}

async function forgetPassword(body){
    try {
       const result = await userRepository.forgetPassword(body);
       return result;
    } catch (error) {
       throw(error);
    }
}

async function getUsers(){
    try {
       const result = await userRepository.getUsers();
       return result;
    } catch (error) {
       throw(error);
    }
}

async function getUserById(id){
    try {
       const result = await userRepository.getUserById(id);
       return result;
    } catch (error) {
       throw(error);
    }
}

async function updateUserById(body){
    try {
       const result = await userRepository.updateUserById(body);
       return result;
    } catch (error) {
       throw(error);
    }
}

async function deleteUserById(id){
    try {
       const result = await userRepository.deleteUserById(id);
       return result;
    } catch (error) {
       throw(error);
    }
}


module.exports = {insertUser, userLogin, forgetPassword, getUsers, getUserById, updateUserById, deleteUserById};