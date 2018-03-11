import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Event, Center } from '../models';

dotenv.config();


/**
 * @class Event
 *@classdesc class Event
 */

class Events {
/**
   * get Events
   * @desc Show a list of all the current events in the db
   * Route: GET: 'api/v1/events'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

  static getEvent(req, res) {
    Event.all()
      .then(event => res.status(200).send({ message: 'success', event }))
      .catch(error => res.status(200).send(error));
  }

  /**
   * Get one Event
   * @desc Return a single event based on the id number
   * Route: GET: 'api/v1/events/<eventID>'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

  static getOneEvent(req, res) {
    Event.findById(req.params.id, {
      include: [{ model: Center, as: 'centers' }],
    })
      .then((event) => {
        if (event) {
          res.status(200).send({ message: 'Event', event });
        } else {
          res.status(400).send({ message: 'event not found' });
        }
      });
  }


  /**
   * Add a new Event
   * @desc Add a new Event
   * Route: POST: 'api/v1/events'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

  static createEvent(req, res) {
    Event.create({
      eventName: req.body.name,
      eventdate: req.body.date,
      time: req.body.time,
      purpose: req.body.purpose,
      centerId: parseInt(req.body.center, 10),
      userId: req.user.id
    })
      .then(event => res.status(201).json({ message: 'successfully created', event }))
      .catch(error => res.status(400).json({ message: 'center not found!!', error }));
  }

  /**
   * Edit an already saved Event
   * @desc Return a single event based on the id number
   * Route: PUT: 'api/v1/events/<eventID>'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

  static editEvent(req, res) {
    Event.findOne({ where: { id: req.params.id } })
      .then((event) => {
        if (event) {
          event.update({
            eventName: req.body.name,
            eventdate: req.body.date,
            time: req.body.time,
            purpose: req.body.purpose,
            centerId: req.body.center
          });
          res.status(200).json({ message: 'updated', event });
        } else {
          res.status(404).json({ message: 'event not found' });
        }
      })
      .catch(err => res.status(400).json(err));
  }

  /**
   * Delete Event
   * @desc Deleter an event
   * Route: DELETE: 'api/v1/events/<eventID>'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

  static deleteEvent(req, res) {
    Event.findOne({ where: { id: req.params.id } })
      .then((event) => {
        if (event) {
          event.destroy();
          res.status(200).json({ message: 'Event successfully deleted!' });
        } else {
          res.status(404).json({ message: 'event not found' });
        }
      })
      .catch(err => res.status(400).json(err));
  }
}

export default Events;

