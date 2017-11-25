import express from 'express'
import eventController from '../controllers/eventController'


const eventRouter = express.Router()

eventRouter.get('/', eventController.allEvent)
eventRouter.get('/:id', eventController.findEvent)
eventRouter.post('/', eventController.createEvent)
eventRouter.delete('/:id', eventController.deleteEvent)
eventRouter.put('/:id', eventController.updateEvent)

export default eventRouter
