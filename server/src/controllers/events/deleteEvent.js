import db from '../../data/db';
const data = db.events;

class DeleteEvent{
    static delete(req, res) {
        const id = req.params.id
        for (let i = 0; i < data.length; i++){
            if( id == data[i].id){
                data.splice(i, 1)
                return res.status(200).send({
                    message: 'deleted',
                    data: data
                })
            }
        }
         res.status(404).json({
            message: 'event doesnt exist!'
        })    
    }
}
export default DeleteEvent;