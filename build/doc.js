/**
* @swagger
* definitions:
*   Signup:
*     type: object
*     properties:
*       fullname:
*         type: string
*       email:
*         type: string
*         format: email
*       password:
*         type: string
*         format: password
*       confirmPassword:
*         type: string
*         format: password
*     example:
*       fullname: John Doe
*       email: johndoe@example.com
*       password: 12345
*       confirmPassword: 12345
*/

/**
* @swagger
* definitions:
*   Signin:
*     properties:
*       email:
*         type: string
*         format: email
*       password:
*         type: string
*         format: password
*     example:
*       email: johndoe@example.com
*       password: 12345
*/

/**
* @swagger
* definitions:
*   Event:
*     properties:
*       name:
*         type: string
*       date:
*         type: string
*       time:
*         type: string
*       purpose:
*         type: string
*       center:
*         type: centerId
*     example:
*       name: Birthday Party
*       date: 2017-20-12
*       time: 09:00
*       purpose: celebration of life
*       center:  1
*/
/**
* @swagger
* definitions:
*   Center:
*     properties:
*       name:
*         type: string
*       city:
*         type: string
*       address:
*         type: string
*       facility:
*         type: arrary
*     example:
*       name: Yaba Center
*       city: -Lagos
*       address: No, 22, Yaba road, Sururlere
*       facility: [free wifi, car pack, hall]
*       center:  1
*/

/**
* @swagger
* /api/v1/centers:
*   get:
*     tags:
*       - Recipes
*     description: Returns all centers
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Centers'
*/

/**
* @swagger
* /api/v1/centers/<centerId>:
*   get:
*     tags:
*       - Centers
*     description: Returns one center with events add for the center
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Centers'
*/

/**
* @swagger
* /api/v1/centers/:
*   post:
*     tags:
*       - Centers
*     description: add a new center
*     produces:
*       - application/json
*     responses:
*       201:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Centers'
*/

/**
* @swagger
* /api/v1/centers/<centerId>:
*   put:
*     tags:
*       - Centers
*     description: Edit a centers infomation
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Centers'
*/

/**
* @swagger
* /api/v1/centers/<centerId>:
*   delete:
*     tags:
*       - Centers
*     description: Delete a center
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Centers'
*/

/**
* @swagger
* /api/v1/events/
*   get:
*     tags:
*       - Events
*     description: Returns all Events
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Events'
*/

/**
* @swagger
* /api/v1/events/<eventId>
*   get:
*     tags:
*       - Events
*     description: Returns onw Event with the center added for the event
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Events'
*/

/**
* @swagger
* /api/v1/events/:
*   post:
*     tags:
*       - Events
*     description: add a new event
*     produces:
*       - application/json
*     responses:
*       201:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Centers'
*/

/**
* @swagger
* /api/v1/events/<eventId>:
*   put:
*     tags:
*       - Event
*     description: Edit an events infomation
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Centers'
*/

/**
* @swagger
* /api/v1/events/<eventId>:
*   delete:
*     tags:
*       - Centers
*     description: Delete a event
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Successfull
*         schema:
*           $ref: '#/definitions/Centers'
*/
"use strict";
//# sourceMappingURL=doc.js.map