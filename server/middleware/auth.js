import jwt from 'jsonwebtoken';

require('dotenv').config();


/** Class Auth a point. */
class Auth {
  /**
   * verify the token attatched on every request
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *  @param {Object} next HTTP response object
   *
   * @returns {void}
   */
  static verifyToken(req, res, next) {
    //  to amethod to get token anf validate it
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
      // return 403 if tokem is not present
      return res.status(403).json({
        message: 'You need to sign up or login',
      });
    }
  }
}


export default Auth;
