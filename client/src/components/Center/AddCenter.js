import React, { Component } from 'react';
import { connect } from 'react-redux';
import CenterFrom from './Form/CenterForm';
import * as action from '../../store/actions/index';


class AddCenter extends Component {
    state = {
      centerName: '',
      city: '',
      address: '',
      availability: '',
      values: '',
      facility: []
    }


  /* getInput = () => {
     document.getElementById('add').onclick = function () {
       const node = document.createElement('li');
       node.className += 'list-group-item list-group-item-primary';
       const text = document.getElementById('addFacility').value;
       const textnode = document.createTextNode(text);
       node.appendChild(textnode);
       document.getElementById('list').appendChild(node);
     };
   } */
  onClick = () => {
    this.setState({ facility: this.state.facility.concat([this.state.values]) });
    this.setState({ values: '' });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }),


    console.log(this.state);
  }

   onSubmit = (e) => {
     e.preventDefault();
     if (e.target.type != 'textarea' && e.which === 13 /* Enter */) {
       event.preventDefault();
     }
     this.props.initPostCenters(this.state);
   }

  /* catch =(e) => {
      ({ [e.target.name]: e.target.value });
      console.log(input);
    } */


   render() {
     let errorMessage = null;

     if (this.props.error) {
       errorMessage = (<p style={{ color: 'red', textAlign: 'center' }}><strong>{this.props.error}</strong></p>);
     }

     let successMessage = null;

     if (this.props.newCenter) {
       successMessage = (<p style={{ color: '#35434A', textAlign: 'center' }}><strong>{this.props.newCenter}</strong></p>);
     }


     return (
       <div className="container" style={{ paddingTop: '100px' }}>
         <div className="card card w-50 loginCard ">
           <div className="card-header dark">
             <h1 className="color">Add Center</h1>
           </div>
           <CenterFrom
             errorMessage={errorMessage}
             successMessage={successMessage}
             onChange={this.onChange}
             onSubmit={this.onSubmit}
             centerName={this.state.centerName}
             city={this.state.city}
             address={this.state.address}
             availability={this.state.availability}
             values={this.state.values}
             onClick={this.onClick}
             facility={this.state.facility}
             key={this.props.match.params.id}
           />
         </div>
        
       </div>


     );
   }
}


const mapStateToProps = state => ({
  newCenter: state.centers.newCenter,
  error: state.centers.error
});

const mapDispatchToProps = dispatch => ({
  initPostCenters: input => dispatch(action.initPostCenters(input)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddCenter);
