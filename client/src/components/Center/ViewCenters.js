import React, { Component } from 'react';
import axios from 'axios';
import Display from './getCenter';

class Centers extends Component {
     state = {
       centers: [],

     }

     componentDidMount() {
       axios.get('/centers')
         .then((res) => {
           this.setState({ centers: res.data.center });
           // console.log(this.state.centers);
         })
         .catch((error) => {
           console.log(error);
         });
     }
     centerclicked = (id) => {
       this.selectedCenterId({ selectedCenterId: id });
     }

     render() {
       const centers = this.state.centers.map(center =>
         (<Display
           key={center.id}
           centerName={center.centerName}
           address={center.address}
           clicked={() => this.centerclicked(center.id)}
         />));
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
