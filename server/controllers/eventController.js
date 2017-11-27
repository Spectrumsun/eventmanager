import db from './../data/db.json'

const data = db.events


exports.allEvent = (req, res) => {
  res.status(200).send(data)
}


exports.findEvent = (req, res) => {
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
    message: 'Event doesnt exist!'
  })
}


exports.createEvent = (req, res) => {
  data.push({
    id: req.body.id,
    name: req.body.name,
    date: req.body.date,
    center: req.body.center,
    time: req.body.time,
    purpose: req.body.purpose
  })
  res.status(201).send({
    message: 'success',
    data
  })
}


exports.updateEvent = (req, res) => {
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


exports.deleteEvent = (req, res) => {
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

