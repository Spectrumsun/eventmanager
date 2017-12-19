'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var secret = process.env.SECRET;

/**
 * @class User
 *@classdesc User Class
 */

// const Secret = process.env.SECRET;

var Users = function () {
  function Users() {
    _classCallCheck(this, Users);
  }

  _createClass(Users, null, [{
    key: 'signup',

    /**
       * signUp
       * @desc Registers a user to the application
       * Route: POST: 'api/v1/users/signup'
       * @param {Object} req request object
       * @param {Object} res response object
       * @returns {void}
       */

    value: function signup(req, res) {
      var data = req.body.password;

      _bcrypt2.default.hash(data, 10).then(function (hash) {
        return _models.User.create({
          fullname: req.body.fullname,
          email: req.body.email,
          password: hash,
          confirmPassword: req.body.confirmPassword,
          role: req.body.role
        }).then(function (user) {
          return res.status(201).send({
            message: 'User successfully created',
            user: {
              fullname: user.fullname,
              email: user.email
            }
          });
        }).catch(function (error) {
          return res.status(400).send({ message: 'email already used' });
        });
      });
    }
    /**
     * signIn
     * @desc Login a user to the application
     * Route: POST: 'api/v1/users/signin'
     * @param {Object} req request object
     * @param {Object} res response object
     * @returns {void}
     */

  }, {
    key: 'login',
    value: function login(req, res) {
      _models.User.findOne({
        where: {
          email: req.body.email
        }
      }).then(function (user) {
        if (user) {
          _bcrypt2.default.compare(req.body.password, user.password, function (err, response) {
            if (response) {
              var token = _jsonwebtoken2.default.sign({
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                role: user.role
              }, secret, { expiresIn: '200h' });
              return res.status(200).send({ message: 'Welcome ' + user.email + ' ', fullname: user.fullname, token: token });
            }
            return res.status(400).send({ message: 'email or password incorrect' });
          });
        } else {
          res.status(404).send({ message: 'No user with such information' });
        }
      });
    }
  }]);

  return Users;
}();

exports.default = Users;
//# sourceMappingURL=userController.js.map