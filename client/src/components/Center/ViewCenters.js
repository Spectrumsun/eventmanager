import React, { Component } from 'react';
import axios from 'axios';
import Display from './getCenter';
import CenterInfo from '../Center/CenterInfo';
import { Route, Link } from 'react-router-dom';

class Centers extends Component {
     state = {
       centers: [],
     }

     componentDidMount() {
       console.log(this.props);
       axios.get('/centers')
         .then((res) => {
           this.setState({ centers: res.data.center });
           // console.log(this.state.centers);
         })
         .catch((error) => {
           console.log(error);
         });
     }
     centerSelectedHandler = (id) => {
       this.setState({ selectedCenterId: id });
       // this.props.histroy.push('/centers/'+ id);
     }

     render() {
       const centers = this.state.centers.map(center =>
         (<Link to={`/centers/${center.id}`} key={center.id} style={{color: 'black'}}>
           <Display
             centerName={center.centerName}
             address={center.address}
             clicked={() => this.centerSelectedHandler(center.id)}
           />
          </Link>
         ));
       return (
         <div>
           <div className="container" style={{ paddingTop: '100px' }}>
             <h1 style={{ textAlign: 'center' }}>Centers</h1>
             {centers}
           </div>
         </div>
       );
     }
}

export default Centers;
