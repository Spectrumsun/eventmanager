import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class Auth {
  static verifyToken(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      const secret = process.env.SECRET;
      jwt.verify(token, secret, (err, data) => {
        if (err) {
          return res.json({
            message: 'authentication failed',
          });
        }
        req.user = data;
        next();
      });
    } else {
      return res.status(404).json({
        message: 'no token yet',
      });
    }
  }
}


export default Auth;