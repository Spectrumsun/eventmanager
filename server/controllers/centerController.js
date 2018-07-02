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
    let { limit, page } = req.query;
    if (limit === undefined && page === undefined) {
      limit = 6;
      page = 1;
    }

    if (Number.isNaN(parseInt(limit, 10)) ||
        Number.isNaN(parseInt(page, 10))) {
      return res.status(400).json({
        message: 'Limit or Page must be a number',
      });
    }
    const offset = limit * (page - 1);
    Center.findAndCountAll({
      attributes: {
        exclude: ['updatedAt', 'createdAt']
      },
      limit,
      order: [['createdAt', 'DESC']],
      offset,
    })
      .then((data) => {
        const pages = Math.ceil(data.count / limit);

        const users = data.rows;
        res.status(200).json({
          message: 'success',
          result: users,
          count: data.count,
          pages
        });
      })
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
      attributes: ['centerName', 'city', 'id',
        'address', 'availability', 'imageurl',
        'imageId', 'about', 'facility'],
      include: [
        {
          model: Event,
          as: 'events',
          attributes: ['startDate', 'endDate']
        }
      ],
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
      })
      .catch(err => res.status(400).json({
        message: 'Invalid Parameter In Url'
      }));
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
   *  Admin can add new center to the db
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *
   * @returns {void}
   */
  static searchCenter(req, res) {
    const { searchString, limit, page, } = req.query;
    const offset = limit * (page - 1);
    Center.findAndCountAll({
      attributes: {
        exclude: ['updatedAt', 'createdAt', 'userId']
      },
      limit,
      order: [['createdAt', 'DESC']],
      offset,
      where: {
        $or: [
          {
            centerName: {
              $iLike: `%${searchString}%`
            }
          },
          {
            city: {
              $iLike: `%${searchString}%`
            }
          },
          {
            availability: {
              $iLike: `%${searchString}%`
            }
          }
        ]
      }
    })
      .then((data) => {
        const pages = Math.ceil(data.count / limit);
        const users = data.rows;
        res.status(200).json({
          message: 'found',
          match: `${data.count} Found that Match Your Search`,
          searchString: req.query.searchString,
          result: users,
          count: data.count,
          pages,
        });
      })
      .catch(err => res.status(404).json({
        error: 'An error occured',
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
      })
      .catch(err => res.status(400).json({
        message: 'Invalid Parameter In Url'
      }));
  }
}

export default Centers;
