import db from '../models';

const eventDB = db.Event;
const Center = db.Center;

class Event {
  static getEvent(req, res) {
    eventDB
      .all()
      .then(event => res.status(200).send({ message: 'success', event }))
      .catch(error => res.status(200).send(error));
  }

  static getOneEvent(req, res) {
    eventDB
      .findById(req.params.id)
      .then((event) => {
        if (!event) {
          return res
            .status(404)
            .send({ message: 'Event not found' });
        }
        return eventDB
          .findById(req.params.id, {
            include: [{
              model: Center,
              as: 'centers'
            }],
          })
          .then(event => res.status(200).send({ message: 'found', event }))
          .catch(error => res.status(200).send(error));
      });
  }

  static createEvent(req, res) {
    eventDB
      .create({
        eventName: req.body.name,
        eventdate: req.body.date,
        center: req.body.center,
        time: req.body.time,
        purpose: req.body.purpose,
        centerId: req.body.center
      })
      .then(event => res.status(201).send({ message: 'successfully created', event }))
      .catch(error => res.status(400).send(error));
  }

  static editEvent(req, res) {
    eventDB
      .findById(req.params.id)
      .then((event) => {
        if (!event) {
          return res
            .status(404)
            .send({ message: 'Event Not Found' });
        }
        return event
          .update({
            eventName: req.body.name, 
            eventdate: req.body.date, 
            center: req.body.center, 
            time: req.body.time, 
            purpose: req.body.purpose,
            centerId: req.body.center
          })
          .then(() => res.status(200).send({ message: 'updated', event }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  static deleteEvent(req, res) {
    eventDB
      .findById(req.params.id)
      .then((event) => {
        if (!event) {
          return res
            .status(400)
            .send({ message: 'Event not Found' });
        }
        return event
          .destroy()
          .then(res.status(200).send({ message: 'Event successfully deleted!' }))
          .catch(error => res.status(400).send(error));
      });
  }
}

export default Event;
