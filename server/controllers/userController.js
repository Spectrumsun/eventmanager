import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { resetpassword, emailVerfication } from '../handlers/mail';
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
        role: 'user',
        emailVerfication: crypto.randomBytes(20).toString('hex'),
        emailVerficationExpires: Date.now()
      }).then(
        user =>
          emailVerfication({
            user,
            subject: 'Email Verification',
            emailVerfication: `http//${req.headers.host}/users/email/${user.emailVerfication}`,
            name: user.fullname
          }),
        res.status(201).json({
          message: 'Account successfully created Check Your mail to verify'
        })
      ))//.catch(error => res.status(400).json({ message: 'Email alreeady used!!', error }));
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
                role: user.role
              }, secret, { expiresIn: '200h' });
              return res
                .status(200)
                .json({ message: `Welcome ${user.fullname} `, token });
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

  static confirmEmail(req, res) {
    User.findOne({ where: { emailVerfication: req.params.token } })
      .then((user) => {
        if (user) {
          user.update({
            emailVerfication: null,
            emailVerficationExpires: null
          });
          res.status(200).json({message: '💃 Nice! Email Confirmed You are can now login! ' });
        } else {
          res.status(400).json({message: 'Email verification failed token is not invalid or has expired' });
        }
      })
      .catch(error => res.status(400).json({ message: 'An error occoured', error }));
  }


  static isConfirmEmail(req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          next();
          return;
        }
        if (user.emailVerfication && user.emailVerficationExpires !== null) {
          return res.status(400).json({ message: 'You have to first confirm Your Email' });
        }
        next();
      });
  }

  static forgotpassword(req, res) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          user.update({
            resetPasswordToken: crypto.randomBytes(20).toString('hex'),
            resetPasswordExpires: Date.now() + 360000
          });
          const resetURL = `http//${req.headers.host}/user/password/reset/${user.resetPasswordToken}`;
          resetpassword({
            user,
            subject: 'Password Reset',
            resetURL,
            name: user.fullname
          });
          res.status(200).json({ message: 'Check your email for a password reset link' });
        } else {
          res.status(404).json({ message: 'Check your email for a password reset link' });
        }
      })
      .catch(error => res.status(400).json({ message: 'An error occoured', error }));
  }

  static passwordReset(req, res) {
    User.findOne({ where: { resetPasswordToken: req.params.token, resetPasswordExpires: Date.now() } })
      .then((user) => {
        if (user) {
          const data = req.body.password;
          bcrypt.hash(data, 10)
            .then(hash => user.update({
              password: hash,
              confirmassword: req.body.confirmPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null
            }));
          res.status(200).json({ message: 'Password Changed. You can Login with your new password' });
        } else {
          res.status(400).json({ message: 'Invaild or expired reset token' });
        }
      }).catch(error => res.status(400).json({ error }));
  }
}

export default Users;
