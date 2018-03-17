import { Event, Center } from '../models';


/**
 * @class Event
 *@classdesc class Event
 */

class Centers {
  // return a list of cennters in the db
  static getCenter(req, res) {
    Center.all()
      .then(center => res.status(200).json({ message: 'success', center }))
      .catch(error => res.status(200).json(error));
  }

  // return just one center that the id matches the parmas id
  static getOneCenter(req, res) {
    Center.findById(req.params.id, {
      include: [{
        model: Event,
        as:
        'events'
      }],
    })
      .then((center) => {
        if (center) {
          res.status(200).json({ message: 'Center', center });
        } else {
          res.status(400).json({ message: 'center not found' });
        }
      });
  }

  // Admin can add new center to the db
  static createCenter(req, res) {
    Center.create({
      centerName: req.body.name,
      city: req.body.city,
      address: req.body.address,
      facility: req.body.facility,
      availability: req.body.availability || 'unknow'
    })
      .then(center => res.status(201).json({ message: 'successfully created', center }))
      .catch(error => res.status(400).json({ message: 'Unable to create Center! ', error }));
  }


  // Admin can edit a center
  static editCenter(req, res) {
    Center.findOne({ where: { id: req.params.id } })
      .then((center) => {
        if (center) {
          center.update({
            centerName: req.body.name,
            city: req.body.city,
            address: req.body.address,
            facility: req.body.facility,
            availability: req.body.availability || 'unknow'
          });
          res.status(200).json({ message: 'updated', center });
        } else {
          res.status(404).json({ message: 'center not found' });
        }
      })
      .catch(err => res.status(400).json(err));
  }

  // admin can delete a center
  static deleteCenter(req, res) {
    Center.findOne({ where: { id: req.params.id } })
      .then((center) => {
        if (center) {
          center.destroy();
          res.status(200).json({ message: 'center successfully deleted!' });
        } else {
          res.status(404).json({ message: 'center not found' });
        }
      })
      .catch(err => res.status(400).json(err));
  }
}

export default Centers;
