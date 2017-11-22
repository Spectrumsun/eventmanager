import dbc from '../../data/dbc';

const data = dbc.center;

class UpdateCenter{

    static update(req, res){
        const id = req.params.id;
        for(let i = 0; i < data.length; i++){
            if (id == data[i].id){
                data[i].name = req.body.name
                data[i].city = req.body.city;
                data[i].address = req.body.address;
                data[i].facility = req.body.facility;
                return res.status(200).json({
                    message: 'edited', 
                    id: data[i]
                })
            }
        }
        res.status(404).json({
            message: 'center doesnt exist!'
        })         
    } 
} 



export default UpdateCenter;


