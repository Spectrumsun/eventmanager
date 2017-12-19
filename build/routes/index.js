'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _swaggerJsdoc = require('swagger-jsdoc');

var _swaggerJsdoc2 = _interopRequireDefault(_swaggerJsdoc);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _middleware = require('../middleware');

var _controllers = require('../controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

_dotenv2.default.config();

/* GET Home Page. */

router.get('/', function (req, res) {
  res.status(200).send({ message: 'welcome to Event Manager' });
});

/* All API Routes */

// POST Add a new user
router.post('/users', _middleware.validator.validateSigup, _controllers.userController.signup);

// POST Login an existing user
router.post('/users/login', _middleware.validator.validatelogin, _controllers.userController.login);

// GET Events
router.get('/events', _middleware.auth.verifyToken, _controllers.eventController.getEvent);

// GET One Event with the Center for the event
router.get('/events/:id', _middleware.auth.verifyToken, _controllers.eventController.getOneEvent);

// POST  Add a new Event
router.post('/events', _middleware.auth.verifyToken, _middleware.validator.validateCreateEvent, _middleware.validator.checkDate, _controllers.eventController.createEvent);

// PUT Edit event
router.put('/events/:id', _middleware.auth.verifyToken, _middleware.validator.validateCreateEvent, _middleware.validator.checkDate, _middleware.validator.validateEventOwner, _controllers.eventController.editEvent);

// DELETE remove event
router.delete('/events/:id', _middleware.auth.verifyToken, _middleware.validator.validateEventOwner, _controllers.eventController.deleteEvent);

// GET All Centers
router.get('/centers', _controllers.centerController.getCenter);

// GET a single  Center with events added to the center
router.get('/centers/:id', _middleware.auth.verifyToken, _controllers.centerController.getOneCenter);

// POST  Add a new center
router.post('/centers', _middleware.auth.verifyToken, _middleware.validator.validateCreateCenter, _middleware.validator.validateAdmin, _controllers.centerController.createCenter);

// PUT edit a center
router.put('/centers/:id', _middleware.auth.verifyToken, _middleware.validator.validateCreateCenter, _middleware.validator.validateAdmin, _controllers.centerController.editCenter);

// DELETE  remove a Center
router.delete('/centers/:id', _middleware.auth.verifyToken, _middleware.validator.validateAdmin, _controllers.centerController.deleteCenter);

exports.default = router;
//# sourceMappingURL=index.js.map