import express from 'express'
import { CreateEvent, UpdateEvent, DeleteEvent } from '../controllers/events'

const eventRouter = express.Router()

eventRouter.post('/', CreateEvent.create)
eventRouter.delete('/:id', DeleteEvent.delete)
eventRouter.put('/:id', UpdateEvent.update)

export default eventRouter
