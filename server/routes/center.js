import express from 'express'
import centerController from '../controllers/centerController'
//import {app}  from '../server.js'


const centerRoute = express.Router()

centerRoute.get('/', centerController.allCenters)
centerRoute.post('/', centerController.addCenter)
centerRoute.get('/:id', centerController.findCenter)
centerRoute.put('/:id', centerController.updateCenter)

export default centerRoute
