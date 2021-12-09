const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer')) {
    return res.status(401).json({
      error: 'Not Token Provided',
    });
  }
  const token = authorization.split(' ')[1];
  const user = await jwt.verify(token, process.env.JWT_SECRET);
  if (!user) {
    return res.status(401).json({
      error: 'Unauthorized request',
    });
  }
  req.user = user;
  next();
};
module.exports = auth;
