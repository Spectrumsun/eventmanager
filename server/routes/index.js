import express from 'express';
import eventController from '../controllers/eventController';
import centerController from '../controllers/centerController';
import userController from '../controllers/userController';
import validator from '../handlers/validator';

const router = express.Router();

/* Get Home Page. */

router.get('/', (req, res) => {
  res
    .status(200)
    .send({ message: 'welcome to our Event Manager' });
});

router.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.get('/events', eventController.getEvent);
router.get('/events/:id', eventController.getOneEvent);
router.post('/events', validator.validateCreateEvent, eventController.createEvent);
router.put('/events/:id', validator.validateCreateEvent, eventController.editEvent);
router.delete('/events/:id', eventController.deleteEvent);

router.get('/centers', centerController.getCenter);
router.get('/centers/:id', centerController.getOneCenter);
router.post('/centers', validator.validateCreateCenter, centerController.createCenter);
router.put('/centers/:id', validator.validateCreateCenter, centerController.editCenter);
router.delete('/centers/:id', centerController.deleteCenter);

router.post('/users/signup', validator.validateSigup, userController.signup);
router.post('/users/login', validator.validatelogin, userController.login);

export default router;
