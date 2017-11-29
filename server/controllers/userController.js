import jwt from 'jsonwebtoken';
import bcrpt from 'bcrypt';
import db from '../models';

const userDB = db.User;


/**
 * @class User
 *@classdesc User Class
 */

// const Secret = process.env.SECRET;

class User {
/**
   * signUp
   * @desc Registers a user to the application
   * Route: POST: 'api/v1/users/signup'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */


  static signup(req, res) {
    userDB
      .create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        role: req.body.role
      })
      .then(user => res.status(201).send({
        message: 'User successfully created',
        user: {
          fullname: user.fullname,
          email: user.email,
        }
      }))
      .catch(error => res.status(400).send(error));
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
    userDB
      .findOne({
        where: {
          email: req.body.Email
        }
      })
      .then((user) => {
        if (user) {
          bcrypt.compare(req.body.password, user.password, (err, response) => {
            if (response) {
              const token = jwt.sign({
                userId: user.userId,
                fullname: user.fullname,
                email: user.email
              }, Secret, { expiresIn: '24h' });
              return res
                .status(200)
                .send({ message: `Welcome ${user.email} `, fullname: user.fullname, token });
            }
            return res
              .status(409)
              .send({ message: 'email or password incorrect' });
          });
        } else {
          res
            .status(404)
            .send({ message: 'NO user with such information' });
        }
      });
  }

}

export default User;
