import express from 'express';
import dotenv from 'dotenv';
import { validator, auth } from '../middleware';
import { eventController, centerController, userController } from '../controllers';

const router = express.Router();

dotenv.config();


/* GET Home Page. */

router.get('/', (req, res) => {
  res.status(200)
    .send({ message: 'welcome to Event Manager' });
});


/* All API Routes */

// POST Add a new user
router.post(
  '/users',
  validator.validateSigup,
  userController.signup
);

// POST Login an existing user
router.post(
  '/users/login',
  validator.validatelogin,
  userController.isConfirmEmail,
  userController.login
);

// Post send a email to user account with a link for password reset
router.post(
  '/users/forgotpassword',
  validator.forgetPassword,
  userController.forgotpassword
);

// all user to change password
router.post(
  '/users/password/reset/:token',
  validator.passwordReset,
  userController.passwordReset
);

// check if user has confirm emaill address
router.get(
  '/users/email/:token',
  userController.confirmEmail
);

// GET Events
router.get(
  '/events',
  eventController.getEvent
);

// GET One Event with the Center for the event
router.get(
  '/events/:id',
  eventController.getOneEvent
);

// POST  Add a new Event
router.post(
  '/events', auth.verifyToken,
  validator.validateCreateEvent,
  validator.checkDate,
  eventController.createEvent
);

// PUT Edit event
router.put(
  '/events/:id', auth.verifyToken,
  validator.validateCreateEvent,
  validator.checkDate,
  validator.validateEventOwner,
  eventController.editEvent
);

// DELETE remove event
router.delete(
  '/events/:id',
  auth.verifyToken,
  validator.validateEventOwner,
  eventController.deleteEvent
);


// GET All Centers
router.get(
  '/centers',
  centerController.getCenter
);

// GET a single  Center with events added to the center
router.get(
  '/centers/:id',
  centerController.getOneCenter
);

// POST  Add a new center
router.post(
  '/centers',
  auth.verifyToken,
  validator.validateCreateCenter,
  validator.validateAdmin,
  centerController.createCenter
);

// PUT edit a center
router.put(
  '/centers/:id',
  auth.verifyToken,
  validator.validateCreateCenter,
  validator.validateAdmin,
  centerController.editCenter
);

// DELETE  remove a Center
router.delete(
  '/centers/:id',
  auth.verifyToken,
  validator.validateAdmin,
  centerController.deleteCenter
);


export default router;
