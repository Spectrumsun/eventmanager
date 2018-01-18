import React, { Component } from 'react';
import { connect } from 'react-redux';
import CenterFrom from './Form/CenterForm';
import * as action from '../../store/actions/index';


class AddCenter extends Component {
    state = {
      centerName: this.props.loadedCenter.centerName,
      city: this.props.loadedCenter.city,
      address: this.props.loadedCenter.address,
      availability: this.props.loadedCenter.availability,
      facility: this.props.loadedCenter.facility,
      values: '',
    }

    onClick = () => {
      this.setState({ facility: this.state.facility.concat([this.state.values]) });
      this.setState({ values: '' });
    }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

   onSubmit = (e) => {
     if (e.target.type != 'textarea' && e.which === 13 /* Enter */) {
       e.preventDefault();
     }
     e.preventDefault();
     this.props.initEditCenter(this.props.match.params.id, this.state);
   }


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
             <h1 className="color">Edit Center</h1>
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
             disabled={this.state.values}

           />
         </div>
       </div>


     );
   }
}


const mapStateToProps = state => ({
  editCenter: state.centers.editCenter,
  loadedCenter: state.centers.loadedCenter,
  error: state.centers.error
});

const mapDispatchToProps = dispatch => ({
  initEditCenter: (id, input) => dispatch(action.initEditCenter(id, input)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddCenter);
