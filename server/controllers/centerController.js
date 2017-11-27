import db from '../models'

const centerDB = db.Center


class Center {
  static getCenter(req, res) {
    centerDB
      .all()
      .then(center => res.status(200).send({ message: 'success', center }))
      .catch(error => res.status(200).send(error))
  }

  static getOneCenter(req, res) {
    centerDB
      .findById(req.params.id)
      .then((center) => {
        if (!center) {
          return res
            .status(404)
            .send({ message: 'center not found' })
        }
        return centerDB
          .findById(req.params.id)
          .then(center => res.status(200).send({ message: 'found', center }))
          .catch(error => res.status(200).send(error))
      })
  }

  static createCenter(req, res) {
    centerDB
      .create({ centerName: req.body.name, city: req.body.city, address: req.body.address, facility: req.body.facility })
      .then(center => res.status(201).send({ message: 'successfully created', center }))
      .catch(error => res.status(400).send(error))
  }

  
}

export default Center
