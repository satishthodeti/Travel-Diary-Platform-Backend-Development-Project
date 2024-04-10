const diaryEntryRepository = require("../respositories/diaryEntries.respositories");
const { mapResponse, mapArrayResponse } = require("../mappers/mapper");

async function createDiaryEntry(body, user) {
    try {
        const result = await diaryEntryRepository.insertDiaryEntry(body, user);
        const data = mapResponse(result);
        return data;
    } catch (error) {
        throw error;
    }
}

async function getAllDiaryEntriesByUserId(userId) {
    try {
        const result = await diaryEntryRepository.getDiaryEntriesByUserId(userId);
        const data = mapArrayResponse(result);
        return data;
    } catch (error) {
        throw error;
    }
}

async function getDiaryEntryById(entryId) {
    try {
        const result = await diaryEntryRepository.getDiaryEntryById(entryId);
        const data = mapResponse(result);
        const checkDataExist = Object.keys(data).length > 0 ? data : 'No Data Found!';
        return checkDataExist;
    } catch (error) {
        throw error;
    }
}

async function updateDiaryEntryById(body) {
    try {
        const result = await diaryEntryRepository.updateDiaryEntry(body);
        const data = mapResponse(result);
        return data;
    } catch (error) {
        throw error;
    }
}

async function deleteDiaryEntryById(entryId, userId) {
    try {
        const result = await diaryEntryRepository.deleteDiaryEntry(entryId, userId);
        const data = mapResponse(result);
        return ;
    } catch (error) {
        throw error;
    }
}

module.exports = { createDiaryEntry, getAllDiaryEntriesByUserId, getDiaryEntryById, updateDiaryEntryById, deleteDiaryEntryById };
