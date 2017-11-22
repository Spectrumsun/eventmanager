import dbc from '../../data/dbc'

const data = dbc.center;

class AllCenters{

    static all(req, res){
            res.status(200).send(data);
        
    }
}
export default AllCenters;
