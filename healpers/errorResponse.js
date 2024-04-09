const responseJson = require("./response");

async function errorresponseJson(error) {
      const errorResponse = await responseJson(
        500,
        error.code?"DB Error":"Application Error",
        error
      );
      return errorResponse
    
  }
  
  module.exports = errorresponseJson;