const responseJson =async (status, message, errorReasons, data,page) => {
    return {
      metadata: {
        status: status,
        message: message,
        errorReasons:errorReasons.length>0?errorReasons:undefined,
      },
      data: data,
      meta:page
    };
  };
  
  module.exports = responseJson;
  