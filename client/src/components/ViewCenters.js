import React, { Component } from 'react';
import axios from 'axios';
// import CenterInfo from './CenterInfo';

class Centers extends Component {
     state = {
       centers: []
     }

     componentDidMount() {
       axios.get('/centers')
         .then((res) => {
           this.setState({ centers: res.data });
           console.log(this.state.centers);
         });
     }

     render() {
      
       return (
         <div className="container" style={{ paddingTop: '100px' }}>
           <h1 style={{ textAlign: 'center' }}>Centers</h1>
           <div className="card d-lg-inline-block" style={{ width: '20rem' }}>
             <div className="card-body">
               <h4 className="card-title">Havilah Event Centre</h4>
               <h6 className="card-subtitle mb-2 text-muted">No 33 Ignobi Street Lagos</h6>
               <a href="centerinfo.html" className="card-link">View More</a>
             </div>
           </div>
         </div>
       );
     }
}

export default Centers;
