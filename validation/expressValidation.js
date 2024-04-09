const validationRules = require("./validation.rules");


const addUserValidation = () => {
    return [
          validationRules.userNameCheck,
          validationRules.userEmailCheck,
          validationRules.userPasswordCheck
    ];
  };

  const updateUserValidation = () => {
      return [
            validationRules.userNameCheck,
            validationRules.userEmailCheck,
            validationRules.userIdCheck,
      ];
    };

  const userLogInValidation = () => {
    return [
          validationRules.userEmailCheck,
          validationRules.userPasswordCheck,
    ];
  };

  const addWishListValidation = () => {
    return [
          validationRules.productNameCheck,
          validationRules.priceCheck,
          validationRules.descriptionCheck
    ];
  };

  const userIdValidation = () => {
    return [
          validationRules.idCheck
    ];
  };

  const wishlistIdValidation = () => {
    return [
          validationRules.wishlistIdCheck
    ];
  };

  module.exports = {addUserValidation, userLogInValidation, updateUserValidation, addWishListValidation, userIdValidation, wishlistIdValidation};