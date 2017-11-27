import db from '../models'

const centerDB = db.Center


class Center {
  static getCenter(req, res) {
    centerDB.all()
      .then(center => res.status(200).send({ message: 'success', center }))
      .catch(error => res.status(200).send(error))
  }