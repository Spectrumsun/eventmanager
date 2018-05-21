import dotenv from 'dotenv';
import { Event, Center } from '../models';

dotenv.config();

/** Class Users */
class Events {
  /**
   * return all the list of events in the database in json
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static getEvent(req, res) {
    Event.all({
      where: {
        userId: req.user.id
      },
      include: [{
        model: Center,
        as: 'centers',
        attributes: ['centerName', 'imageurl', 'id']
      }],
    })
      .then((event) => {
        if (event.length < 1) {
          res.status(200).send({
            message: 'success',
            myevent: 'You dont have any event Yet',
            event
          });
        } else {
          res.status(200).send({
            message: 'success',
            event
          });
        }
      })
      .catch(error => res.status(200).send(error));
  }

  /**
   * return one event which id is the same has id in the pramas
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static getOneEvent(req, res) {
    Event.findById(req.params.id, {
      include: [{ model: Center, as: 'centers' }],
    })
      .then((event) => {
        if (event) {
          res.status(200).send({
            message: 'Event',
            event
          });
        } else {
          res.status(404).send({
            message: 'event not found'
          });
        }
      })
      .catch(err => res.status(400).json({
        message: 'Invalid Parameter In Url'
      }));
  }

  /**
   * A sign in user can create a new event
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
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
      .then(event => res.status(201).json({
        message: 'successfully created',
        event
      }))
      .catch(error => res.status(400).json({
        message: 'Error adding event',
        error
      }));
  }

  /**
   * editEvent an event in the db
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static editEvent(req, res) {
    Event.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    })
      .then((event) => {
        event.update({
          eventName: req.body.name,
          eventdate: req.body.date,
          time: req.body.time,
          purpose: req.body.purpose,
          centerId: parseInt(req.body.center, 10),
        });
        res.status(200).json({
          message: 'updated',
          event
        });
      })
      .catch(err => res.status(404).json({
        message: 'You dont own any event with that id!!',
        err
      }));
  }

  /**
   * a sign in user can delete events they add
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static deleteEvent(req, res) {
    Event.destroy({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    })
      .then((event) => {
        if (event) {
          res.status(200).json({
            message: 'Event successfully deleted!'
          });
        } else {
          res.status(404).json({
            message: 'You dont own any event with that id!!',
          });
        }
      })
      .catch(err => res.status(400).json({
        message: 'Invalid Parameter In Url'
      }));
  }
}

export default Events;
