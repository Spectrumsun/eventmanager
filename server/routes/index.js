import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
import { validator, auth } from '../middleware';
import { eventController, centerController, userController } from '../controllers'

const router = express.Router();

dotenv.config();


/* GET Home Page. */

router.get('/', (req, res) => {
  res.status(200)
    .send({ message: 'welcome to Event Manager' });
});


/* All API Routes */

// POST Add a new user
router.post('/users', validator.validateSigup, userController.signup);

// POST Login an existing user
router.post('/users/login', validator.validatelogin, userController.login);

// GET Events
router.get('/events', auth.verifyToken, eventController.getEvent);

// GET One Event with the Center for the event
router.get('/events/:id', auth.verifyToken, eventController.getOneEvent);

// POST  Add a new Event
router.post('/events', auth.verifyToken, validator.validateCreateEvent,  eventController.createEvent);

// PUT Edit event
router.put('/events/:id', auth.verifyToken, validator.validateCreateEvent, eventController.editEvent);

// DELETE remove event
router.delete('/events/:id', auth.verifyToken, eventController.deleteEvent);


// GET All Centers
router.get('/centers', centerController.getCenter);

// GET a single  Center with events added to the center
router.get('/centers/:id', auth.verifyToken, centerController.getOneCenter);

// POST  Add a new center
router.post('/centers', auth.verifyToken, validator.validateCreateCenter, centerController.createCenter);

// PUT edit a center
router.put('/centers/:id', auth.verifyToken, validator.validateCreateCenter, centerController.editCenter);

// DELETE  remove a Center
router.delete('/centers/:id', auth.verifyToken, centerController.deleteCenter);


export default router;
