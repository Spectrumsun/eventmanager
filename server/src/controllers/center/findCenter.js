/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import dbc from '../../data/dbc.json'

const data = dbc.center

class FindCenter {
  static find(req, res) {
    const { id } = req.params
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        return res.status(200).json({
          message: 'found',
          id: data[i]
        })
      }
    }
    res.status(404).json({
      message: 'center doesnt exist!'
    })
  }
}


export default FindCenter

