'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: 'verifyToken',
    value: function verifyToken(req, res, next) {
      var token = req.body.token || req.query.token || req.headers['x-access-token'];
      if (token) {
        var secret = process.env.SECRET;
        _jsonwebtoken2.default.verify(token, secret, function (err, data) {
          if (err) {
            return res.status(401).json({
              message: 'Authentication failed'
            });
          }
          req.user = data;

          next();
        });
      } else {
        return res.status(403).json({
          message: 'You need to sign up or login'
        });
      }
    }
  }]);

  return Auth;
}();

exports.default = Auth;
//# sourceMappingURL=auth.js.map