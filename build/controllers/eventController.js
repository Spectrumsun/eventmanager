'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();

/**
 * @class Event
 *@classdesc class Event
 */

var Events = function () {
  function Events() {
    _classCallCheck(this, Events);
  }

  _createClass(Events, null, [{
    key: 'getEvent',

    /**
       * get Events
       * @desc Show a list of all the current events in the db
       * Route: GET: 'api/v1/events'
       * @param {Object} req request object
       * @param {Object} res response object
       * @returns {void}
       */

    value: function getEvent(req, res) {
      _models.Event.all().then(function (event) {
        return res.status(200).send({ message: 'success', event: event });
      }).catch(function (error) {
        return res.status(200).send(error);
      });
    }

    /**
     * Get one Event
     * @desc Return a single event based on the id number
     * Route: GET: 'api/v1/events/<eventID>'
     * @param {Object} req request object
     * @param {Object} res response object
     * @returns {void}
     */

  }, {
    key: 'getOneEvent',
    value: function getOneEvent(req, res) {
      _models.Event.findById(req.params.id, {
        include: [{ model: _models.Center, as: 'centers' }]
      }).then(function (event) {
        if (event) {
          res.status(200).send({ message: 'Event', event: event });
        } else {
          res.status(400).send({ message: 'event not found' });
        }
      });
    }

    /**
     * Add a new Event
     * @desc Add a new Event
     * Route: POST: 'api/v1/events'
     * @param {Object} req request object
     * @param {Object} res response object
     * @returns {void}
     */

  }, {
    key: 'createEvent',
    value: function createEvent(req, res) {
      _models.Event.create({
        eventName: req.body.name,
        eventdate: req.body.date,
        time: req.body.time,
        purpose: req.body.purpose,
        centerId: parseInt(req.body.center, 10),
        userId: req.user.id
      }).then(function (event) {
        return res.status(201).send({ message: 'successfully created', event: event });
      }).catch(function (error) {
        return res.status(400).send({ message: 'center not found!!' });
      });
    }

    /**
     * Edit an already saved Event
     * @desc Return a single event based on the id number
     * Route: PUT: 'api/v1/events/<eventID>'
     * @param {Object} req request object
     * @param {Object} res response object
     * @returns {void}
     */

  }, {
    key: 'editEvent',
    value: function editEvent(req, res) {
      _models.Event.findOne({ where: { id: req.params.id } }).then(function (event) {
        if (event) {
          event.update({
            eventName: req.body.name,
            eventdate: req.body.date,
            time: req.body.time,
            purpose: req.body.purpose,
            centerId: req.body.center
          });
          res.status(200).send({ message: 'updated', event: event });
        } else {
          res.status(404).send({ message: 'event not found' });
        }
      }).catch(function (err) {
        return res.status(400).send(err);
      });
    }

    /**
     * Delete Event
     * @desc Deleter an event
     * Route: DELETE: 'api/v1/events/<eventID>'
     * @param {Object} req request object
     * @param {Object} res response object
     * @returns {void}
     */

  }, {
    key: 'deleteEvent',
    value: function deleteEvent(req, res) {
      _models.Event.findOne({ where: { id: req.params.id } }).then(function (event) {
        if (event) {
          event.destroy();
          res.status(200).send({ message: 'Event successfully deleted!' });
        } else {
          res.status(404).send({ message: 'event not found' });
        }
      }).catch(function (err) {
        return res.status(400).send(err);
      });
    }
  }]);

  return Events;
}();

exports.default = Events;
//# sourceMappingURL=eventController.js.map