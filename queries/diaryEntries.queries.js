const diaryEntryQueries = {
    insertDiaryEntry: `INSERT INTO tdp.diary_entries(
        user_id, title, description, date, location, photos, created_by)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
    
    getDiaryEntriesByUserId: `SELECT entry_id, ude, user_id, title, description, date, location, photos, created_at, updated_at, is_deleted
        FROM tdp.diary_entries`,
    
    getDiaryEntryById: `SELECT de.entry_id, de.ude, de.user_id, de.title, de.description, de.date, de.location, de.photos, de.created_at, de.updated_at, de.is_deleted, tu.is_admin
        FROM tdp.diary_entries de
        LEFT JOIN tdp.users  tu ON de.user_id =  tu.user_id
        WHERE entry_id = $1 AND NOT de.is_deleted;`,
    
    updateDiaryEntry: `UPDATE tdp.diary_entries 
        SET title = $2, description = $3, date = $4, location = $5, photos = $6
        WHERE entry_id = $1 AND user_id = $7 RETURNING *;`,
    
    deleteDiaryEntry: `DELETE FROM tdp.diary_entries 
        WHERE entry_id = $1;`,
        
    isDeleteTrue:   `UPDATE tdp.diary_entries
        SET is_deleted = true
        WHERE entry_id = $1 AND user_id = $2;`
};

module.exports = diaryEntryQueries;
