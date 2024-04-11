const jwt = require("jsonwebtoken");
const { authSecret } = require("../config");
const { getUserById } = require("../services/user.service");

const validateToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Token is missing' });
    }

    jwt.verify(token, authSecret, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      const currentTimestamp = Math.floor(Date.now() / 1000); // Current UNIX timestamp
      if (decoded.exp && decoded.exp < currentTimestamp) {
        return res.status(401).json({ message: 'Token has expired' });
      }

      try {
        const userData = await getUserById(decoded.userId);
        if (!userData || userData.length === 0) {
          return res.status(404).json({ message: 'User not found' });
        }

        req.user = userData[0];
        const newToken = jwt.sign({ userId: decoded.userId }, authSecret, { expiresIn: '30m' });
        res.cookie('token', newToken, { httpOnly: true, maxAge: 1800000, sameSite: 'none', secure: true });
        next();
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    });
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { validateToken };
