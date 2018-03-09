import React, { Component } from 'react';
import EventForm from './Form/EventForm';
import { connect } from 'react-redux';
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
  }

   onSubmit = (e) => {
     e.preventDefault();
     this.setState({ center: this.props.centerId });
     this.props.initPostEvent(this.state, this.props.history);
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
           />
         </div>
       </div>
     );
   }
}


const mapStateToProps = state => ({
  newEvent: state.events.newEvent,
  centerId: state.centers.centerId,
});

const mapDispatchToProps = dispatch => ({
  initPostEvent: (input, history) => dispatch(action.initPostEvent(input, history)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EventCenter);

