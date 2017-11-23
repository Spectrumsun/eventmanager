import dbc from '../../data/dbc.json'

const data = dbc.center

class AddCenter {
  static add(req, res) {
    data.push({
      id: req.body.id,
      name: req.body.name,
      city: req.body.city,
      addres: req.body.address,
      facility: req.body.facility
    })
    res.status(200).send({
      message: 'success',
      data
    })
  }
}
export default AddCenter
