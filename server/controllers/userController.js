import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { resetpassword, emailVerfication } from '../handlers/mail';
import { User } from '../models';


const secret = process.env.SECRET;

class Users {
  // signup a new user and save the inforamtion to db
  static signup(req, res) {
    const data = req.body.password;
    // hash user password with bcrypt
    bcrypt.hash(data, 10)
      .then(hash => User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hash,
        confirmPassword: req.body.confirmPassword,
        role: req.body.role,
        emailVerfication: crypto.randomBytes(20).toString('hex'),
        emailVerficationExpires: Date.now()
      }))/* .then(user =>
      // send a mail to the user after a successfull signup
        emailVerfication({
          user,
          subject: 'Email Verification',
          emailVerfication: `http://${req.headers.host}/users/email/${user.emailVerfication}`,
          name: user.fullname
        })) */
      .then(users =>
        res.status(201).send({
          message: 'Account successfully created. Check your mail to confirm your account '
        }))
      .catch(error =>
        res.status(400).send({
          message: 'Email already used !!'
        }));
  }

  // login a user and trow error if user does not exisit or password is wrong
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
                .json({
                  message: `Welcome ${user.fullname} `,
                  token
                });
            }
            return res
              .status(400)
              .json({
                message: 'email or password incorrect'
              });
          });
        } else {
          res
            .status(404)
            .json({
              message: 'email or password incorrect'
            });
        }
      });
  }

  // confirm if new email verfication token in parmas is valid
  static confirmEmail(req, res) {
    User.findOne({ where: { emailVerfication: req.params.token } })
      .then((user) => {
        if (user) {
          user.update({
            emailVerfication: null,
          });
          res.status(200).json({
            message: '💃 Nice! Email Confirmed You are can now login! '
          });
        } else {
          res.status(400).json({
            message: 'Email verification failed token is not invalid'
          });
        }
      })
      .catch(error => res.status(400).json({
        message: 'An error occoured', error
      }));
  }

  // check if user has confirm email address before they can login
  static isConfirmEmail(req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          next();
          return;
        }
        if (user.emailVerfication !== null) {
          return res.status(400).json({
            message: 'You have to first confirm Your Email'
          });
        }
        next();
      });
  }

  // reset user password and send them a email link to a url token
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
      })
      .catch(error => res.status(400).json({ message: 'An error occoured', error }));
  }

  // verify if reset password token is same as reset password in db then change the password
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
              confirmassword: req.body.confirmPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null
            }));
          res.status(200).json({
            message: 'Password Changed. You can Login with your new password'
          });
        } else {
          res.status(400).json({
            message: 'Invaild or expired reset token'
          });
        }
      }).catch(error => res.status(400).json({ error }));
  }
}

export default Users;
