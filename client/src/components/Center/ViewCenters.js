import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Display from './getCenter';
import CenterInfo from '../Center/CenterInfo';


class Centers extends Component {
     state = {
       centers: []
     }

     componentDidMount() {
       axios.get('/centers/')
         .then((res) => {
           this.setState({ centers: res.data.center });
           // console.log(this.state.centers);
         })
         .catch((e) => {
           console.log(e);
           this.setState({ e: true });
         });
     }
     centerclicked = (id) => {
       this.props.history.push(`/centers/${id}`);
     }

     render() {
       let centers = <p style={{ textAlign: 'center' }}>Somthing went wrong</p>;
       if (!this.state.e) {
         centers = this.state.centers.map(center =>
           (
             <Display
               key={center.id}
               centerName={center.centerName}
               address={center.address}
               clicked={() => this.centerclicked(center.id)}
             />
           ));
       }


       return (
         <div>
           <div className="container" style={{ paddingTop: '100px' }}>
             <h1 style={{ textAlign: 'center' }}>Centers</h1>
             {centers}
             <CenterInfo id={this.state.selectedCenterId} />
           </div>
           

         </div>
       );
     }
}

export default Centers;
