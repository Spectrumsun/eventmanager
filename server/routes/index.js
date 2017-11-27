import express from 'express'
import eventController from '../controllers/eventController'
import centerController from '../controllers/centerController'
import userController from '../controllers/userController'


const router = express.Router()


/* Get Home Page. */

router.get('/', (req, res) => {
  res.status(200).send({ message: 'welcome to our Event Manager' })
})


router.get('/events', eventController.getEvent)
router.get('/events/:id', eventController.getOneEvent)
router.post('/events', eventController.createEvent)
router.put('/events/:id', eventController.editEvent)
router.delete('/events/:id', eventController.deleteEvent)


router.get('/centers', centerController.getCenter)
router.get('/centers/:id', centerController.getOneCenter)
router.post('/centers', centerController.createCenter)
router.put('/centers/:id', centerController.editCenter)
router.delete('/centers/:id', centerController.deleteCenter)


router.post('/users/signup', userController.signup)
router.post('/users/login', userController.login)

