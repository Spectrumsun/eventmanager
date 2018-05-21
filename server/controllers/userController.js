import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { resetpassword, emailVerfication } from '../handlers/mail';
import { User } from '../models';


const secret = process.env.SECRET;

/** Class Users */
class Users {
  /**
   * signup new users
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static signup(req, res) {
    // signup a new user and save the inforamtion to db
    const data = req.body.password;
    // hash user password with bcrypt
    bcrypt.hash(data, 10)
      .then(hash => User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hash,
        confirmPassword: req.body.confirmPassword,
        role: 'user',
        emailVerfication: crypto.randomBytes(20).toString('hex'),
        emailVerficationExpires: Date.now()
      }))
      .then((user) => {
        // send a mail to the user after a successfull signup
        emailVerfication({
          user,
          subject: 'Email Verification',
          emailVerfication: `http://${req.headers.host}/users/email/${user.emailVerfication}`,
          name: user.fullname
        });
        res.status(201).send({
          message: 'Account successfully created. Check your mail to confirm your account ',
          user: {
            email: user.email,
            fullname: user.fullname
          }
        });
      })
      .catch(error =>
        res.status(409).send({
          message: 'Email already used !!',
        }));
  }


  /**
   * login in exisiting user to t=and return a token
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static login(req, res) {
    // login a user and trow error if user does not exisit or password is wrong
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        // check if user has confirm email address before they can login
        if (user && user.emailVerfication !== null) {
          return res.status(400).json({
            message: 'You have to first confirm Your Email'
          });
        }

        if (user) {
          bcrypt
            .compare(
              req.body.password, user.password,
              (err, response) => {
                if (response) {
                  const token = jwt.sign({
                    id: user.id,
                    fullname: user.fullname,
                    role: user.role
                  }, secret, { expiresIn: '200h' });
                  return res
                    .status(200)
                    .json({
                      message: `Welcome ${user.fullname} `,
                      token
                    });
                }
                return res
                  .status(409)
                  .json({
                    message: 'Email or password incorrect'
                  });
              }
            );
        } else {
          res
            .status(404)
            .json({
              message: 'Email or password incorrect'
            });
        }
      });
  }


  /**
   * confirmEmail for new users that just sign up
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static confirmEmail(req, res) {
    // confirm if new email verfication token in parmas is valid
    User.findOne({
      where: {
        emailVerfication: req.params.token
      }
    })
      .then((user) => {
        user.update({
          emailVerfication: null,
        });
        res.status(200).json({
          message: 'Nice! Email Confirmed You are can now login!'
        });
        if (user.email === process.env.ADMINEMAIL) {
          user.update({
            role: process.env.ADMIN
          });
        }
        return user;
      })
      .catch(err => res.status(400).json({
        message: 'Email verification failed token is not invalid',
        err
      }));
  }


  /**
   * send forgotpassword mail user to reset password
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static forgotpassword(req, res) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          user.update({
            resetPasswordToken: crypto.randomBytes(20).toString('hex'),
            resetPasswordExpires: Date.now() + 360000
          });
          const resetURL = `http://${req.headers.host}/user/password/reset/${user.resetPasswordToken}`;
          resetpassword({
            user,
            subject: 'Password Reset',
            resetURL,
            name: user.fullname
          });
          res.status(200).json({
            message: 'Check your email for a password reset link',
          });
        } else {
          res.status(404).json({
            message: 'Check your email for a password reset link'
          });
        }
      });
  }


  /**
   * verify if reset password token in params
   * is same as reset password in db then cha
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static passwordReset(req, res) {
    User.findOne({
      where: {
        resetPasswordToken: req.params.token,
        resetPasswordExpires: { $gt: Date.now() }
      }
    })
      .then((user) => {
        if (user) {
          const data = req.body.password;
          bcrypt.hash(data, 10)
            .then(hash => user.update({
              password: hash,
              confirmPassword: req.body.confirmPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null
            }));
          res.status(200).json({
            message: 'Password Changed. You can Login with your new password'
          });
        } else {
          res.status(401).json({
            message: 'Invaild or expired reset token'
          });
        }
      });
  }

  /**
   * make new admin
   * is same as reset password in db then cha
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static makeAdmin(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        user.update({
          role: req.body.role
        });
        res.status(200).json({
          message: 'user role changed'
        });
      })
      .catch(err => res.status(404).json({ error: 'No user found', err }));
  }
}

export default Users;
