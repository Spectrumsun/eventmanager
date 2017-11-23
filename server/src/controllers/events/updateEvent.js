/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import db from '../../data/db.json'

const data = db.events

class UpdateEvent {
  static update(req, res) {
    const { id } = req.params
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        data[i].name = req.body.name
        data[i].date = req.body.date
        data[i].center = req.body.center
        data[i].time = req.body.time
        data[i].purpose = req.body.purpose
        return res.status(200).json({
          message: 'edited',
          id: data[i]
        })
      }
    }
    res.status(404).json({
      message: 'event doesnt exist!'
    })
  }
}
export default UpdateEvent

