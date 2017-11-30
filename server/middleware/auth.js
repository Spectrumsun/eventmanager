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
