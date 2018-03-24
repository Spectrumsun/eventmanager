import jwt from 'jsonwebtoken';

require('dotenv').config();

class Auth {
  // confirm if toekn exist and is valid
  static verifyToken(req, res, next) {
    const token = req.body.token || req.query.token || req.headers.authorization;
    if (token) {
      const secret = process.env.SECRET;
      jwt.verify(token, secret, (err, data) => {
        if (err) {
          return res.status(401).json({
            message: 'Authentication failed',
          });
        }
        req.user = data;
        next();
      });
    } else {
      return res.status(403).json({
        message: 'You need to sign up or login',
      });
    }
  }
}


export default Auth;
