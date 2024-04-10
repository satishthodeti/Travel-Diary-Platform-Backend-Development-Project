const userQueries = {
    insertUser: `INSERT INTO tdp.users(
     user_name, user_password, user_email, user_full_name, date_of_birth, profile_picture, created_at, updated_at, is_deleted, is_admin)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`,
    
    userLogin: `SELECT user_id, tun, user_name, user_password, user_email, user_full_name, date_of_birth, profile_picture, created_at, updated_at, is_deleted, is_admin
        FROM tdp.users
        WHERE user_email = $1 AND user_password = $2;`,
    
    getUsers: `SELECT user_id, tun, user_name, user_password, user_email, user_full_name, date_of_birth, profile_picture, created_at, updated_at, is_deleted, is_admin
        FROM tdp.users
        WHERE NOT is_deleted;`,
    
    getUserById: `SELECT user_id, tun, user_name, user_password, user_email, user_full_name, date_of_birth, profile_picture, created_at, updated_at, is_deleted, is_admin
        FROM tdp.users 
        WHERE user_id = $1 AND NOT is_deleted;`,
    
    updateUser: `UPDATE tdp.users 
        SET user_name = $2, user_email = $3, user_full_name = $4, date_of_birth = $5, profile_picture = $6, updated_at = $7, is_admin = $8
        WHERE user_id = $1 RETURNING *;`,
    
    deleteUser: `UPDATE  tdp.users 
    SET is_deleted = true
    WHERE user_id = $1 RETURNING *`,
        
    isDeleteQiaryEntriesTrue:   `UPDATE tdp.diary_entries
        SET is_deleted = true
        WHERE user_id = $1;`,
    
    getUserByEmailId: `SELECT user_id, tun, user_name, user_password, user_email, user_full_name, date_of_birth, profile_picture, created_at, updated_at, is_deleted
     FROM tdp.users 
    WHERE user_email = $1 AND NOT is_deleted;`,
    
    updatePassword: `UPDATE tdp.users
        SET user_password = $2
        WHERE user_email = $1 RETURNING *;`
};

module.exports = userQueries;
