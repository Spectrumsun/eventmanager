import db from '../models';
import jwt from 'jsonwebtoken';
import bcrpt from 'bcrypt';

const userDB = db.User;

// require('dotenv').config()

const Secret = process.env.SECRET;

class User {
  static login(req, res) {
    userDB.findOne({
      where: {
        email: req.body.Email
      },
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
              return res.status(200).send({
                message: `Welcome ${user.email} `,
                fullname: user.fullname,
                token
              });
            }
            return res.status(409).send({ message: 'email or password incorrect' });
          });
        } else {
          res.status(404).send({
            message: 'This user with such information'
          });
        }
      });
  }
}


export default User;
