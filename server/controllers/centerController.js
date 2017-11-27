import dbc from './../data/dbc.json'

const data = dbc.center


exports.allCenters = (req, res) => {
  res.status(200).send(data)
}


exports.addCenter = (req, res) => {
  data.push({
    id: req.body.id,
    name: req.body.name,
    city: req.body.city,
    address: req.body.address,
    facility: req.body.facility
  })
  res.status(201).send({
    message: 'success',
    data
  })
}


exports.findCenter = (req, res) => {
  const { id } = req.params
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      return res.status(302).json({
        message: 'found',
        id: data[i]
      })
    }
  }
  res.status(404).json({
    message: 'center doesnt exist!'
  })
}


exports.updateCenter = (req, res) => {
  const { id } = req.params
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      data[i].name = req.body.name
      data[i].city = req.body.city
      data[i].address = req.body.address
      data[i].facility = req.body.facility
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
