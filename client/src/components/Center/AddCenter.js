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
     // if (e.target.type != 'textarea' && e.which === 13 /* Enter */) {
     // e.preventDefault();
     // }
     this.props.initPostCenters(this.state);
   }


   render() {
     return (
       <div className="container" style={{ paddingTop: '100px' }}>
         <div className="card card w-50 loginCard ">
           <div className="card-header dark">
             <h1 className="color">Add Center</h1>
           </div>
           <CenterFrom
             onChange={this.onChange}
             onSubmit={this.onSubmit}
             centerName={this.state.centerName}
             city={this.state.city}
             address={this.state.address}
             availability={this.state.availability}
             values={this.state.values}
             onClick={this.onClick}
             facility={this.state.facility}
             disabled={this.state.values}
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
