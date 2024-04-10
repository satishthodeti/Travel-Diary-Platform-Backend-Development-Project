const jwt = require("jsonwebtoken");
const { authSecret } = require("../config");
const {getUserById}= require("../services/user.service");


const validateToken = async(req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  jwt.verify(token, authSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    } 
    const currentTimestamp = Math.floor(Date.now() / 1000); // Current UNIX timestamp
    if (decoded.exp && decoded.exp <currentTimestamp) {
      return res.status(401).json({ message: 'UnAuthorized' })
    } else {
      if(decoded){
        async function getUserData(id) {
          try {
              const  data = await getUserById(id) 
              req.user = data[0];
              const newToken = jwt.sign({ ...data, exp: Math.floor(Date.now() / 1000) + 1800 }, authSecret);
              res.cookie('token', newToken, { httpOnly: true, maxAge: 3600000, sameSite: 'none', secure: true  }); 
              next();
          } catch (error) {
            console.error("An error occurred:", error);
          }
        }
        getUserData(decoded.userId)
       }else{
        return res.status(401).json({ message: 'UnAuthorized' })
       }
    }
    
  });
};

module.exports={validateToken}