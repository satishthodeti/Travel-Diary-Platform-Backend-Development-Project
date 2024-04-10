const express = require("express");
const diaryEntryController = require("../controllers/diaryEntries.controller");
const { validate, isAuth } = require("../healpers/validator");
const {
  addDiaryEntryValidation,
  updateDiaryEntryValidation,
  entryIdValidation,
  userIdValidation,
  userIdDairyValidation
} = require("../validation/expressValidation");
const router = express.Router();
const {
  createDiaryEntry,
  getAllDiaryEntriesByUserId,
  getDiaryEntryById,
  updateDiaryEntryById,
  deleteDiaryEntryById,
} = diaryEntryController;

router.post("/create", addDiaryEntryValidation(), validate, createDiaryEntry);
router.get("/get/allmy/diaryentrys", validate, getAllDiaryEntriesByUserId);
router.get("/get/:entryId", entryIdValidation(), validate, getDiaryEntryById);
router.put("/update",updateDiaryEntryValidation(), validate, isAuth, updateDiaryEntryById);
router.delete("/delete/:entryId", entryIdValidation(), validate, isAuth, deleteDiaryEntryById);

module.exports = router;
