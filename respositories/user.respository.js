const { query } = require("../db");
const userQueries = require("../queries/user.queries");

async function userInsert(body) {
    try {
        const { userName, userPassword, userEmail, userFullName, dateOfBirth, profilePicture, isAdmin = false } = body;
        const result = await query(userQueries.insertUser, [userName, userPassword, userEmail, userFullName, dateOfBirth, profilePicture, new Date(), new Date(), false, isAdmin]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function userLogin(body) {
    try {
        const { userEmail, userPassword } = body;
        const result = await query(userQueries.userLogin, [userEmail, userPassword]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function findByEmail(email) {
    try {
        const result = await query(userQueries.getUserByEmailId, [email]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function forgetPassword(body) {
    try {
        const { userEmail, userPassword } = body;
        const result = await query(userQueries.updatePassword, [userEmail, userPassword]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function getUsers() {
    try {
        const result = await query(userQueries.getUsers);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function getUserById(id) {
    try {
        const result = await query(userQueries.getUserById, [id]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function updateUserById(body) {
    try {
        const { userId, userName, userEmail, userFullName, dateOfBirth, profilePicture, isAdmin = false  } = body;
        const result = await query(userQueries.updateUser, [userId, userName, userEmail, userFullName, dateOfBirth, profilePicture, new Date(), isAdmin]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function deleteUserById(id) {
    try {
        const result = await query(userQueries.deleteUser, [id]);
        await query(userQueries.isDeleteQiaryEntriesTrue, [id])
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function setIsDeletedTrue(userId) {
    try {
        const result = await query(userQueries.isDeleteTrue, [userId]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    userInsert,
    userLogin,
    findByEmail,
    forgetPassword,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    setIsDeletedTrue
};
