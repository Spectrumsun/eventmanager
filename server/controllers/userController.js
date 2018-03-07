import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models';


const secret = process.env.SECRET;


/**
 * @class User
 *@classdesc User Class
 */

// const Secret = process.env.SECRET;

class Users {
/**
   * signUp
   * @desc Registers a user to the application
   * Route: POST: 'api/v1/users/signup'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */


  static signup(req, res) {
    const data = req.body.password;

    bcrypt.hash(data, 10)
      .then(hash => User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hash,
        confirmPassword: req.body.confirmPassword,
        role: req.body.role
      }).then(user => res.status(201).json({
        message: 'Account successfully created',
        user: {
          fullname: user.fullname,
          email: user.email
        }
      }))
        .catch(error => res.status(400).json({ message: 'email already used' })));
  }
  /**
   * signIn
   * @desc Login a user to the application
   * Route: POST: 'api/v1/users/signin'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

  static login(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      },
    })
      .then((user) => {
        if (user) {
          bcrypt.compare(req.body.password, user.password, (err, response) => {
            if (response) {
              const token = jwt.sign({
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                role: user.role
              }, secret, { expiresIn: '200h' });
              return res
                .status(200)
                .json({ message: `Welcome ${user.fullname} `, fullname: user.email, token });
            }
            return res
              .status(400)
              .json({ message: 'email or password incorrect' });
          });
        } else {
          res
            .status(404)
            .json({ message: 'No account with such information' });
        }
      });
  }
}

export default Users;
