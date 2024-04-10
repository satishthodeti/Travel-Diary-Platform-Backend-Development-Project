const { query } = require("../db");
const diaryEntryQueries = require("../queries/diaryEntries.queries");

async function insertDiaryEntry(body, user) {
    try {
        const {  title, description, date, location, photos } = body;
        const result = await query(diaryEntryQueries.insertDiaryEntry, [user.userId, title, description, date, location, photos, user.userId]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function getDiaryEntriesByUserId(userId) {
    try {
        const result = await query(diaryEntryQueries.getDiaryEntriesByUserId, [userId]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function getDiaryEntryById(entryId) {
    try {
        const result = await query(diaryEntryQueries.getDiaryEntryById, [entryId]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function updateDiaryEntry(body) {
    try {
        const { entryId, userId, title, description, date, location, photos } = body;
        const result = await query(diaryEntryQueries.updateDiaryEntry, [entryId, title, description, date, location, photos, userId]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function deleteDiaryEntry(entryId) {
    try {
        const result = await query(diaryEntryQueries.deleteDiaryEntry, [entryId]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

async function markDiaryEntryAsDeleted(entryId, userId) {
    try {
        const result = await query(diaryEntryQueries.isDeleteTrue, [entryId, userId]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = { insertDiaryEntry, getDiaryEntriesByUserId, getDiaryEntryById, updateDiaryEntry, deleteDiaryEntry, markDiaryEntryAsDeleted };
