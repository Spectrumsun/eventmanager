import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventForm from './Form/EventForm';
import * as action from '../../store/actions/index';

class EventCenter extends Component {
   state = {
     name: this.props.loadedEvent.eventName,
     date: this.props.loadedEvent.eventdate,
     time: this.props.loadedEvent.time,
     purpose: this.props.loadedEvent.purpose,
     center: this.props.loadedEvent.centerId
   }

   componentWillMount() {
     this.props.onOneEvent(this.props.match.params.id);
   }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

   onSubmit = (e) => {
     e.preventDefault();
     this.props.initEditEvent(
       this.props.match.params.id, this.state,
       this.props.history
     );
   }

   selectCenter = (id) => {
     this.state.center = id;
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
             selectCenter={id => this.selectCenter(id)}
           />
         </div>
       </div>
     );
   }
}

EventCenter.propTypes = {
  onOneEvent: PropTypes.func.isRequired,
  initEditEvent: PropTypes.func.isRequired,
  loadedEvent: PropTypes.shape({
    eventName: PropTypes.string,
    eventdate: PropTypes.string,
    purpose: PropTypes.string,
    time: PropTypes.string,
    userId: PropTypes.number,
    centerId: PropTypes.number,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};


const mapStateToProps = state => ({
  loadedEvent: state.events.loadedEvent,
  error: state.events.error
});

const mapDispatchToProps = dispatch => ({
  onOneEvent: id => dispatch(action.initGetOneEvent(id)),
  initEditEvent: (id, events, history) => dispatch(action.initEditEvent(id, events, history)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EventCenter);

