import db from '../../data/db';

const data = db.events;

class CreateEvent{

    static create(req, res){
        data.push({
            "id": req.body.id,
            "name": req.body.name,
            "date": req.body.date,
            "center": req.body.center,
            "time": req.body.time,
            "purpose": req.body.purpose
        })
        res.status(200).send({
            message: 'success',
            data: data
        })
    }
}
export default CreateEvent
