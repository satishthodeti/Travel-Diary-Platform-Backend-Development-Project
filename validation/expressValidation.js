const validationRules = require("./validation.rules");

const addUserValidation = () => {
  return [
    validationRules.userNameCheck,
    validationRules.userEmailCheck,
    validationRules.userPasswordCheck,
    validationRules.userFullNameCheck,
    validationRules.dateOfBirthCheck,
    validationRules.profilePictureCheck,
    validationRules.isAdminCheck,
  ];
};

const updateUserValidation = () => {
  return [
    validationRules.tunCheck,
    validationRules.userNameCheck,
    validationRules.userEmailCheck,
    validationRules.userPasswordCheck,
    validationRules.userFullNameCheck,
    validationRules.dateOfBirthCheck,
    validationRules.profilePictureCheck,
    validationRules.isAdminCheck,
  ];
};

const userLogInValidation = () => {
  return [validationRules.userEmailCheck, validationRules.userPasswordCheck];
};

const userIdValidation = () => {
  return [validationRules.idCheck];
};

const entryIdValidation = () => {
  return [validationRules.entryIdCheck];
};

const addDiaryEntryValidation = () => {
  return [
    validationRules.titleCheck,
    validationRules.descriptionCheck,
    validationRules.dateCheck,
    validationRules.locationCheck,
    validationRules.photosCheck,
  ];
};

const updateDiaryEntryValidation = () => {
  return [
    validationRules.entryIdCheck,
    validationRules.titleCheck,
    validationRules.descriptionCheck,
    validationRules.dateCheck,
    validationRules.locationCheck,
    validationRules.photosCheck,
  ];
};

const userIdDairyValidation = () => {
      return [validationRules.userIdCheck];
    };

module.exports = {
  addUserValidation,
  userLogInValidation,
  updateUserValidation,
  userIdValidation,
  addDiaryEntryValidation,
  updateDiaryEntryValidation,
  entryIdValidation,
  userIdDairyValidation
};
