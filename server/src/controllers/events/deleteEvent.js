/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import db from '../../data/db.json'

const data = db.events

class DeleteEvent {
  static delete(req, res) {
    const { id } = req.params
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        data.splice(i, 1)
        return res.status(200).send({
          message: 'deleted',
          data
        })
      }
    }
    res.status(404).json({
      message: 'event doesnt exist!'
    })
  }
}
export default DeleteEvent
