import jwt from 'jsonwebtoken';
import bcrpt from 'bcrypt';
import db from '../models';

const userDB = db.User;

// require('dotenv').config()

const Secret = process.env.SECRET;

class User {
  static signup(req, res) {
    userDB
      .create({
 fullname: req.body.fullname, email: req.body.email, password: req.body.password, confirmPassword: req.body.confirmPassword 
})
      .then(user => res.status(201).send({
        message: 'User successfully created',
        user: {
          fullname: user.fullname,
          email: user.email,
          password: user.password
        }
      }))
      .catch(error => res.status(400).send(error));
  }

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
                id: user.id,
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
            .send({ message: 'This user with such information' });
        }
      });
  }

  static logout(req, res) {}

  static resetPassword(req, res) {
    centerDB
      .create({
 centerName: req.body.name, city: req.body.city, address: req.body.address, facility: req.body.facility 
})
      .then(center => res.status(201).send({ message: 'successfully created', center }))
      .catch(error => res.status(400).send(error));
  }
}

export default User;
