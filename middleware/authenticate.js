const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  
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