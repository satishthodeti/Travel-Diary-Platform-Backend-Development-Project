const {query} = require("../db")
const userQueries = require("../queries/user.queries");
const {ai} = require("../openAi.js")

async function userInsert(body){
    try {
        let {userName, userEmail, encryptedPassword} = body;
        const result = await query(userQueries.insertUser, [userName, userEmail, encryptedPassword]);
        return [...result.rows].shift();
    } catch (error) {
        throw(error);
    }
}

async function userLogin(body){
    try {
        const {userEmail, userPassword} = body;
        const result = await query(userQueries.userLogin, [userEmail, userPassword]);
        const a = await ai('Hi');
        return [...result.rows].shift();
    } catch (error) {
        throw(error);
    }
}

async function findByEmail(email) {
    try {
      const results = await query(userQueries.getUserByEmailId, [email]);
      return results.rows;
    } catch (error) {
      throw error;
    }
  }


  async function forgetPassword(body) {
    try {
      const {userEmail, userPassword} = body;
      const results = await query(userQueries.updatePassword, [userEmail, userPassword]);
      return results.rows;
    } catch (error) {
      throw error;
    }
  }

async function getUsers(){
    try {
        const result = await query(userQueries.getUsers);
        return result.rows;
    } catch (error) {
        throw(error);
    }
}

async function getUserById(id){
    try {
        const result = await query(userQueries.getUserById, [id]);
        return result.rows;
    } catch (error) {
        throw(error);
    }
}

async function updateUserById(body){
    try {
        const {userId, userName, userEmail} = body;
        const result = await query(userQueries.updateUser, [userId, userName, userEmail]);
        return result.rows;
    } catch (error) {
        throw(error);
    }
}

async function deleteUserById(id){
    try {
        const result = await query(userQueries.deleteUser, [id]);
        return result.rows;
    } catch (error) {
        throw(error);
    }
}

module.exports = {userInsert, userLogin, findByEmail, forgetPassword, getUsers, getUserById, updateUserById, deleteUserById};