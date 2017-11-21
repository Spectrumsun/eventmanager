import dbc from '../../data/dbc'

const data = dbc.center;

class FindCenter{
    static find(req, res){
        const id = req.params.id;
        for(let i = 0; i < data.length; i++){
            if (id == data[i].id){
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




export default FindCenter;





