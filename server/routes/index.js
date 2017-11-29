import express from 'express';
import eventController from '../controllers/eventController';
import centerController from '../controllers/centerController';
import userController from '../controllers/userController';
import validator from '../handlers/validator';

const router = express.Router();

/* GET Home Page. */

router.get('/', (req, res) => {
  res
    .status(200)
    .send({ message: 'welcome to our Event Manager' });
});

router.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/* All API Routes */

// POST Add a new user
router.post('/users/signup', validator.validateSigup, userController.signup);

// POST Login an existing user
router.post('/users/login', validator.validatelogin, userController.login);

// GET Events
router.get('/events', eventController.getEvent);

// GET One Event with the Center for the event
router.get('/events/:id', eventController.getOneEvent);

// POST  Add a new Event
router.post('/events', validator.validateCreateEvent, validator.checkDate, eventController.createEvent);

// PUT Edit event
router.put('/events/:id', validator.validateCreateEvent, validator.checkDate, eventController.editEvent);

// DELETE remove event
router.delete('/events/:id', eventController.deleteEvent);


// GET All Centers
router.get('/centers', centerController.getCenter);

// GET a single  Center with events added to the center
router.get('/centers/:id', centerController.getOneCenter);

// POST  Add a new center
router.post('/centers', validator.validateCreateCenter, centerController.createCenter);

// PUT edit a center
router.put('/centers/:id', validator.validateCreateCenter, centerController.editCenter);

// DELETE  remove a Center
router.delete('/centers/:id', centerController.deleteCenter);


export default router;
