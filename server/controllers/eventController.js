import dotenv from 'dotenv';
import { Event, Center } from '../models';

dotenv.config();

class Events {
  // return all the list of events in the database in json
  static getEvent(req, res) {
    Event.all()
      .then(event => res.status(200).send({
        message: 'success',
        event
      }))
      .catch(error => res.status(200).send(error));
  }


  static getOneEvent(req, res) {
    // return one event which id is the same has id in the pramas
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
      });
  }

  // a sign in user can create a new event
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

  // a sign in user can edit events they added
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

  // a sign in user can delete events they add
  static deleteEvent(req, res) {
    Event.destroy({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    })
      .then((event) => {
        if(event){
          res.status(200).json({
            message: 'Event successfully deleted!'
          });
        }else{
          res.status(404).json({
            message: 'You dont own any event with that id!!',
          })
        }})
  }
}

export default Events;
