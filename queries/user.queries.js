const userQueries = {
    insertUser: `INSERT INTO xct.users(
        username, email, password)
        VALUES ($1, $2, $3) RETURNING *;`,
    
    userLogin: `SELECT user_id, username, email, is_delete
        FROM xct.users
        WHERE email = $1 AND password = $2;`,
    
    getUsers: `SELECT user_id, username, email, is_delete
        FROM xct.users;`,
    
    getUserById: `SELECT user_id, username, email, is_delete
        FROM xct.users 
        WHERE user_id = $1;`,
    
    updateUser: `UPDATE xct.users 
        SET username = $2, email = $3
        WHERE user_id = $1 RETURNING *;`,
    
    deleteUser: `DELETE FROM xct.users 
        WHERE user_id = $1 RETURNING *`,
        
    isDeleteTrue:   `UPDATE xct.users
        SET is_delete= false
        WHERE user_id = $1;`,
    
    getUserByEmailId: `SELECT user_id, username, email, password, is_delete
        FROM xct.users 
        WHERE email = $1;`,
    
    updatePassword: `UPDATE xct.users
        SET password=$2
        WHERE email = $1 RETURNING *;`
};

module.exports = userQueries;
