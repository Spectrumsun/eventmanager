'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validate = function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }

  _createClass(Validate, null, [{
    key: 'validateAdmin',
    value: function validateAdmin(req, res, next) {
      var roles = req.user.role;
      if (roles != process.env.ADMIN) {
        return res.status(400).json({ messgae: 'Only an admin can create centers' });
      }
      next();
    }
  }, {
    key: 'validateEventOwner',
    value: function validateEventOwner(req, res, next) {
      _models.Event.findById(req.params.id).then(function (event) {
        var roles = req.user.id;
        if (roles != event.userId) {
          return res.json({ messgae: 'You are not owner of the event' });
        }

        if (!event) {
          return res.status(404).send({ message: 'Event Not Found' });
        }
      });
      next();
    }
  }, {
    key: 'validateSigup',
    value: function validateSigup(req, res, next) {
      req.sanitizeBody('fullname');
      req.checkBody('fullname', 'You must supply a name!').notEmpty();
      req.checkBody('email', 'That Email is not valid!').isEmail();
      req.sanitizeBody('email').normalizeEmail({ remove_dots: false, remove_extension: false, gmail_remove_subaddress: false });
      req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
      req.checkBody('confirmPassword', 'Confirmed Password cannot be blank!').notEmpty();
      req.checkBody('confirmPassword', 'Oops! Your passwords do not match').equals(req.body.password);

      var errors = req.validationErrors();
      if (errors) {
        res.status(400).send({ message: 'Sigup errors', errors: errors });
        return; // stop the fn from running
      }
      next(); // there were no errors!
    }
  }, {
    key: 'validatelogin',
    value: function validatelogin(req, res, next) {
      req.sanitizeBody('fullname');
      req.checkBody('email', 'That Email is not valid!').isEmail();
      req.sanitizeBody('email').normalizeEmail({ remove_dots: false, remove_extension: false, gmail_remove_subaddress: false });
      req.checkBody('password', 'Password Cannot be Blank!').notEmpty();

      var errors = req.validationErrors();
      if (errors) {
        res.status(400).send({ message: 'login errors', errors: errors });
        return; // stop the fn from running
      }
      next(); // there were no errors!
    }
  }, {
    key: 'validateCreateEvent',
    value: function validateCreateEvent(req, res, next) {
      req.checkBody('name', 'You must supply an Event  name!').notEmpty();
      req.checkBody('date', 'You must supply a date !').notEmpty();
      req.checkBody('time', 'You must supply a time!').notEmpty();
      req.checkBody('purpose', 'You must supply a purpose !').notEmpty();
      req.checkBody('center', 'You must pick a center!').notEmpty();

      var errors = req.validationErrors();
      if (errors) {
        return res.status(400).send({ message: 'Errors adding new event', errors: errors });
      }
      next();
    }
  }, {
    key: 'validateCreateCenter',
    value: function validateCreateCenter(req, res, next) {
      req.checkBody('name', 'You must supply a Center  name!').notEmpty();
      req.checkBody('city', 'You must supply a city !').notEmpty();
      req.checkBody('address', 'You must supply a address!').notEmpty();

      var errors = req.validationErrors();
      if (errors) {
        return res.status(400).send({ message: 'Error adding new Center', errors: errors });
        // stop the fn from running
      }
      next();
    }
  }, {
    key: 'checkDate',
    value: function checkDate(req, res, next) {
      if (new Date(req.body.date) - Date.now() < 0) {
        return res.status(400).send({ message: 'You cant set a Past date for the event' });
      }

      if (isNaN(new Date(req.body.date))) {
        return res.status(400).send({ message: 'invalid date format make sure it\'s YYYY-MM-DD format' });
      }

      if (!req.body.time.match(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$/)) {
        return res.status(400).send({ messgae: 'invalid time format make sure it\'s HH:MM format 24 hours' });
      }

      if (isNaN(req.body.center)) {
        return res.status(400).send({ messgae: 'Only Number allowed for Center' });
      }

      _models.Event.findOne({
        where: {
          centerId: req.body.center,
          eventdate: new Date(req.body.date).toISOString()
          // date: req.body.eventdate
        }
      }).then(function (event) {
        // console.log('-----',event.toJSON())
        if (event && event.id != req.params.id) {
          return res.status(409).send({ message: 'Center booked for that date already' });
        }
        next();
      });
    }
  }]);

  return Validate;
}();

exports.default = Validate;
//# sourceMappingURL=validator.js.map