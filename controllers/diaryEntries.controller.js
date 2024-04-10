const diaryEntryService = require("../services/diaryEntry.service");
const responseJson = require("../healpers/response");
const errorResponseJson = require("../healpers/errorResponse");

exports.getAllDiaryEntriesByUserId = async (req, res) => {
    try {
        const userId = req?.params?.userId; 
        const result = await diaryEntryService.getAllDiaryEntriesByUserId(userId);
        const data = await responseJson(200, "Success", [], result);
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.getDiaryEntryById = async (req, res) => {
    try {
        const { entryId } = req?.params;
        const result = await diaryEntryService.getDiaryEntryById(entryId);
        const data = await responseJson(200, "Success", [], result);
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.createDiaryEntry = async (req, res) => {
    try {
        const result = await diaryEntryService.createDiaryEntry(req.body, req.user);
        const data = await responseJson(200, "Diary entry created successfully", [], result);
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.updateDiaryEntryById = async (req, res) => {
    try {
        const result = await diaryEntryService.updateDiaryEntryById(req.body);
        const data = await responseJson(200, "Diary entry updated successfully", [], result);
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};

exports.deleteDiaryEntryById = async (req, res) => {
    try {
        const { entryId } = req?.params;
        const result = await diaryEntryService.deleteDiaryEntryById(entryId, req.user); // Assuming user information is passed in the request
        const data = await responseJson(200, "Diary entry deleted successfully", [], result);
        return res.status(200).json(data);
    } catch (error) {
        const data = await errorResponseJson(error);
        return res.status(500).json(data);
    }
};
