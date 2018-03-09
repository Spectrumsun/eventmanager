import React, { Component } from 'react';
import EventForm from './Form/EventForm';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

class EventCenter extends Component {
   state = {
     name: this.props.loadedEvent.eventName,
     date: this.props.loadedEvent.eventdate.split('T')[0],
     time: this.props.loadedEvent.time,
     purpose: this.props.loadedEvent.purpose,
     center: this.props.loadedEvent.centerId
   }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

   onSubmit = (e) => {
     e.preventDefault();
     this.setState({ center: this.props.centerId });
     this.props.initEditEvent(this.props.match.params.id, this.state, this.props.history);
     console.log(this.state);
   }


   render() {
     return (
       <div className="container" style={{ paddingTop: '100px' }}>
         <div className="card card w-50 loginCard">
           <div className="card-header dark">
             <h1 className="color">Edit Event</h1>
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
  loadedEvent: state.events.loadedEvent,
  centerId: state.centers.centerId,
});

const mapDispatchToProps = dispatch => ({
  initEditEvent: (id, events, history) => dispatch(action.initEditEvent(id, events, history)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EventCenter);

