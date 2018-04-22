import { Event, Center } from '../models';
import deletePicture from '../handlers/deleteImage';

/** Class Users */
class Centers {
  /**
   * return a list of centers in the db
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static getCenter(req, res) {
    Center.all()
      .then(center => res.status(200).json({
        message: 'success',
        center
      }))
      .catch(error => res.status(400).json(error));
  }

  /**
   * return just one center that the id matches the parmas id
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
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
          res.status(200).json({
            message: 'Center',
            center
          });
        } else {
          res.status(400).json({
            message: 'center not found'
          });
        }
      });
  }

  /**
   * create new center just one center that the id matches the parmas id
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static createCenter(req, res) {
    Center.create({
      centerName: req.body.name,
      city: req.body.city,
      address: req.body.address,
      about: req.body.about,
      facility: req.body.facility,
      availability: req.body.availability,
      imageurl: req.body.imageurl,
      imageId: req.body.publicUrlId,
      userId: req.user.id
    })
      .then(center => res.status(201).json({
        message: 'successfully created',
        center
      }))
      .catch(error => res.status(400).json({
        message: 'Unable to create Center! ',
        error
      }));
  }


  /**
   *  Admin can add new center to the db
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static editCenter(req, res) {
    const { oldpublicId, publicUrlId } = req.body;
    deletePicture(oldpublicId, publicUrlId);
    Center.findOne({
      where: {
        id: req.params.id,
      }
    })
      .then((center) => {
        center.update({
          centerName: req.body.name,
          city: req.body.city,
          address: req.body.address,
          about: req.body.about,
          facility: req.body.facility,
          availability: req.body.availability,
          imageurl: req.body.imageurl,
          imageId: req.body.publicUrlId,
        });
        res.status(200).json({
          message: 'updated',
          center
        });
      })
      .catch(err => res.status(404).json({
        message: 'You dont own any center with that id',
        err
      }));
  }

  /**
   * admin can delete a center
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static deleteCenter(req, res) {
    Center.findOne({
      where: {
        id: req.params.id,
      }
    })
      .then((center) => {
        if (center) {
          deletePicture(center.imageId, 'publicUrlId');
          center.destroy();
          res.status(200).json({
            message: 'center successfully deleted!'
          });
        } else {
          res.status(404).json({
            message: 'You dont own any center with that id!!'
          });
        }
      });
    // .catch(err => res.status(400).json(err));
  }
}

export default Centers;
