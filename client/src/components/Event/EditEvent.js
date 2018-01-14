import React, { Component } from 'react';
import EventForm from './Form/EventForm';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

class EventCenter extends Component {
   state = {
     eventName: this.props.loadedEvent.eventName,
     eventdate: this.props.loadedEvent.eventdate,
     time: this.props.loadedEvent.time,
     purpose: this.props.loadedEvent.purpose,
     centerId: this.props.loadedEvent.centerId
   }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

   onSubmit = (e) => {
     e.preventDefault();
     this.props.initEditEvent(this.props.match.params.id, this.state);
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
             <h1 className="color">Edit Event</h1>
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
  editEvent: state.events.editEvent,
  loadedEvent: state.events.loadedEvent,
  error: state.events.error
});

const mapDispatchToProps = dispatch => ({
  initEditEvent: (id, events) => dispatch(action.initEditEvent(id, events)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EventCenter);

