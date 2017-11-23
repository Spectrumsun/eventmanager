import express from 'express'
import { AllCenters, UpdateCenter, FindCenter, AddCenter } from '../controllers/center'

const centerRoute = express.Router()

centerRoute.get('/', AllCenters.all)
centerRoute.post('/', AddCenter.add)
centerRoute.get('/:id', FindCenter.find)
centerRoute.put('/:id', UpdateCenter.update)

export default centerRoute
