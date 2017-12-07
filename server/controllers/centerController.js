import { Event, Center } from '../models';


/**
 * @class Event
 *@classdesc class Event
 */

class Centers {
/**
   * Get all them Center
   * @desc Show a list of all the current Centers.
   * Route: GET: 'api/v1/centers'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

  static getCenter(req, res) {
    Center.all()
      .then(center => res.status(200).send({ message: 'success', center }))
      .catch(error => res.status(200).send(error));
  }

  /**
   * Get a single Center
   * @desc Show just one center with all events associated with the center.
   * Route: GET: 'api/v1/centers/<centerID>'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

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
          res.status(200).send({ message: 'Center', center });
        } else {
          res.status(400).send({ message: 'center not found' });
        }
      });
  }
  /**
   * New Center
   * @desc Add a new center.
   * Route: POST: 'api/v1/centers/'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

  static createCenter(req, res) {
    Center.create({
      centerName: req.body.name,
      city: req.body.city,
      address: req.body.address,
      facility: req.body.facility,
      availability: req.body.availability || 'unknow'
    })
      .then(center => res.status(201).send({ message: 'successfully created', center }))
      .catch(error => res.status(400).send(error));
  }

  /**
   *Edit Center
   * @desc update a centers information.
   * Route: PUT: 'api/v1/centers/<centerID>'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

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
          res.status(200).send({ message: 'updated', center });
        } else {
          res.status(404).send({ message: 'center not found' });
        }
      })
      .catch(err => res.status(400).send(err));
  }

  /**
   * Remove a Center
   * @desc Delete a center.
   * Route: DELETE: 'api/v1/centers/<centerID>'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void}
   */

  static deleteCenter(req, res) {
    Center.findOne({ where: { id: req.params.id } })
      .then((center) => {
        if (center) {
          center.destroy();
          res.status(200).send({ message: 'center successfully deleted!' });
        } else {
          res.status(404).send({ message: 'center not found' });
        }
      })
      .catch(err => res.status(400).send(err));
  }
}

export default Centers;
