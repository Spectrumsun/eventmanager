import React, { Component } from 'react';
import EventForm from './Form/EventForm';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

class EventCenter extends Component {
   state = {
     eventName: '',
     eventdate: '',
     time: '',
     purpose: '',
     centerId: ''
   }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

   onSubmit = (e) => {
     e.preventDefault();
     this.props.initPostEvent(this.state);
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
        <div className="card card w-50 loginCard">
          <div className="card-header dark">
            <h1 className="color">Add Event</h1>
          </div>
          <EventForm
            errorMessage={errorMessage}
            successMessage={successMessage}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            eventName={this.state.eventName}
            eventdate={this.state.eventdate}
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
  error: state.events.error
});

const mapDispatchToProps = dispatch => ({
  initPostEvent: input => dispatch(action.initPostEvent(input)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EventCenter);

