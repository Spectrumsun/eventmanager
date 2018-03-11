import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from './Form/EventForm';
import * as action from '../../store/actions/index';

class EventCenter extends Component {
   state = {
     name: '',
     date: '',
     time: '',
     purpose: '',
     center: ''
   }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ center: this.props.centerId });
  }

 
   onSubmit = (e) => {
     e.preventDefault();
     
     this.props.initPostEvent(this.state, this.props.history);
     console.log(this.state)
   }

   render() {
     return (
       <div className="container" style={{ paddingTop: '100px' }}>
         <div className="card card w-50 loginCard">
           <div className="card-header dark">
             <h1 className="color">Add Event</h1>
           </div>
           <EventForm
             onChange={this.onChange}
             onSubmit={this.onSubmit}
             name={this.state.name}
             date={this.state.date}
             time={this.state.time}
             purpose={this.state.purpose}
             center={this.state.center}
           />
         </div>
       </div>
     );
   }
}


const mapStateToProps = state => ({
  centerId: state.centers.centerId
});

const mapDispatchToProps = dispatch => ({
  initPostEvent: (input, history) => dispatch(action.initPostEvent(input, history)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EventCenter);

