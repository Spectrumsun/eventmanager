'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Event
 *@classdesc class Event
 */

var Centers = function () {
  function Centers() {
    _classCallCheck(this, Centers);
  }

  _createClass(Centers, null, [{
    key: 'getCenter',

    /**
       * Get all them Center
       * @desc Show a list of all the current Centers.
       * Route: GET: 'api/v1/centers'
       * @param {Object} req request object
       * @param {Object} res response object
       * @returns {void}
       */

    value: function getCenter(req, res) {
      _models.Center.all().then(function (center) {
        return res.status(200).send({ message: 'success', center: center });
      }).catch(function (error) {
        return res.status(200).send(error);
      });
    }

    /**
     * Get a single Center
     * @desc Show just one center with all events associated with the center.
     * Route: GET: 'api/v1/centers/<centerID>'
     * @param {Object} req request object
     * @param {Object} res response object
     * @returns {void}
     */

  }, {
    key: 'getOneCenter',
    value: function getOneCenter(req, res) {
      _models.Center.findById(req.params.id, {
        include: [{
          model: _models.Event,
          as: 'events'
        }]
      }).then(function (center) {
        if (center) {
          res.status(200).send({ message: 'Center', center: center });
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

  }, {
    key: 'createCenter',
    value: function createCenter(req, res) {
      _models.Center.create({
        centerName: req.body.name,
        city: req.body.city,
        address: req.body.address,
        facility: req.body.facility,
        availability: req.body.availability || 'unknow'
      }).then(function (center) {
        return res.status(201).send({ message: 'successfully created', center: center });
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }

    /**
     *Edit Center
     * @desc update a centers information.
     * Route: PUT: 'api/v1/centers/<centerID>'
     * @param {Object} req request object
     * @param {Object} res response object
     * @returns {void}
     */

  }, {
    key: 'editCenter',
    value: function editCenter(req, res) {
      _models.Center.findOne({ where: { id: req.params.id } }).then(function (center) {
        if (center) {
          center.update({
            centerName: req.body.name,
            city: req.body.city,
            address: req.body.address,
            facility: req.body.facility,
            availability: req.body.availability || 'unknow'
          });
          res.status(200).send({ message: 'updated', center: center });
        } else {
          res.status(404).send({ message: 'center not found' });
        }
      }).catch(function (err) {
        return res.status(400).send(err);
      });
    }

    /**
     * Remove a Center
     * @desc Delete a center.
     * Route: DELETE: 'api/v1/centers/<centerID>'
     * @param {Object} req request object
     * @param {Object} res response object
     * @returns {void}
     */

  }, {
    key: 'deleteCenter',
    value: function deleteCenter(req, res) {
      _models.Center.findOne({ where: { id: req.params.id } }).then(function (center) {
        if (center) {
          center.destroy();
          res.status(200).send({ message: 'center successfully deleted!' });
        } else {
          res.status(404).send({ message: 'center not found' });
        }
      }).catch(function (err) {
        return res.status(400).send(err);
      });
    }
  }]);

  return Centers;
}();

exports.default = Centers;
//# sourceMappingURL=centerController.js.map