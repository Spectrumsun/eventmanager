
import db from './../data/db.json';

const data = db.events;


exports.allEvent = (req, res) => {
  res.status(200).send(data);
};


exports.findEvent = (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      return res.status(302).json({
        message: 'found',
        id: data[i]
      });
    }


const eventDB = db.Event


class Event {
  static getEvent(req, res) {
    eventDB.all()
      .then(event => res.status(200).send({ message: 'success', event }))
      .catch(error => res.status(200).send(error))

  }
  res.status(404).json({
    message: 'Event doesnt exist!'
  });
};

  static getOneEvent(req, res) {
    eventDB.findById(req.params.id)
      .then((event) => {
        if (!event) {
          return res.status(404).send({ message: 'Event not found' })
        }
        return eventDB.findById(req.params.id)
          .then(event => res.status(200).send({ message: 'found', event }))
          .catch(error => res.status(200).send(error))
      })
  }

exports.createEvent = (req, res) => {
  data.push({
    id: req.body.id,
    name: req.body.name,
    date: req.body.date,
    center: req.body.center,
    time: req.body.time,
    purpose: req.body.purpose
  });
  res.status(201).send({
    message: 'success',
    data
  });
};


exports.updateEvent = (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      data[i].name = req.body.name;
      data[i].date = req.body.date;
      data[i].center = req.body.center;
      data[i].time = req.body.time;
      data[i].purpose = req.body.purpose;
      return res.status(200).json({
        message: 'edited',
        id: data[i]
      });
    }
  }
  res.status(404).json({
    message: 'event doesnt exist!'
  });
};


exports.deleteEvent = (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      data.splice(i, 1);
      return res.status(200).send({
        message: 'deleted',
        data
      });
    }
  }
  res.status(404).json({
    message: 'event doesnt exist!'
  });
};

=======
  static createEvent(req, res) {
    eventDB.create({
      eventName: req.body.name,
      eventdate: req.body.date,
      center: req.body.center,
      time: req.body.time,
      purpose: req.body.purpose,
    })
      .then(event => res.status(201).send({ message: 'successfully created', event }))
      .catch(error => res.status(400).send(error))
  }


  static editEvent(req, res) {
    eventDB.findById(req.params.id)
      .then((event) => {
        if (!event) {
          return res.status(404).send({
            message: 'Event Not Found',
          })
        }
        return event
          .update({
            eventName: req.body.name,
            eventdate: req.body.date,
            center: req.body.center,
            time: req.body.time,
            purpose: req.body.purpose,
          })
          .then(() => res.status(200).send({ message: 'updated', event }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }


  static deleteEvent(req, res) {
    eventDB.findById(req.params.id)
      .then((event) => {
        if (!event) {
          return res.status(400).send({
            message: 'Event not Found',
          })
        }
        return event.destroy().then(res.status(200).send({ message: 'Event successfully deleted!' }))
          .catch(error => res.status(400).send(error))
      })
  }
}


export default Event

