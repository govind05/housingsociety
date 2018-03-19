const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // To check if the user if authenticated. 
  try {
    const token = req.header('x-auth');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (e) {
    return res.status(401).json({
      message: 'Auth Failed'
    })
  }
};