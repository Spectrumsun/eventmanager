import db from '../models';

const Event = db.Event;
const centerDB = db.Center;

class Center {
  static getCenter(req, res) {
    centerDB
      .all()
      .then(center => res.status(200).send({ message: 'success', center }))
      .catch(error => res.status(200).send(error));
  }

  static getOneCenter(req, res) {
    centerDB
      .findById(req.params.id)
      .then((center) => {
        if (!center) {
          return res
            .status(404)
            .send({ message: 'center not found' });
        }
        return centerDB
          .findById(req.params.id, {
            include: [{
              model: Event,
              as: 'events',
            }],
          })
          .then(center => res.status(200).send({ message: 'found', center }))
          .catch(error => res.status(200).send(error));
      });
  }

  static createCenter(req, res) {
    centerDB
      .create({
        centerName: req.body.name, 
        city: req.body.city, 
        address: req.body.address, 
        facility: req.body.facility
      })
      .then(center => res.status(201).send({ message: 'successfully created', center }))
      .catch(error => res.status(400).send(error));
  }

  static editCenter(req, res) {
    centerDB
      .findById(req.params.id)
      .then((center) => {
        if (!center) {
          return res
            .status(404)
            .send({ message: 'center Not Found' });
        }
        return center
          .update({
            centerName: req.body.name, city: req.body.city, address: req.body.address, facility: req.body.facility
          })
          .then(() => res.status(200).send({ message: 'updated', center }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  static deleteCenter(req, res) {
    centerDB
      .findById(req.params.id)
      .then((center) => {
        if (!center) {
          return res
            .status(400)
            .send({ message: 'center not Found' });
        }
        return center
          .destroy()
          .then(res.status(200).send({ message: 'center successfully deleted!' }))
          .catch(error => res.status(400).send(error));
      });
  }
}

export default Center;
