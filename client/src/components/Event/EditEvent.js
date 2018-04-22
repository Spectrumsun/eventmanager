import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'toastr';
import EventForm from './Form/EventForm';
import * as action from '../../store/actions/index';

/**
 * @class EditEvent
 *
 * @extends {React.Component}
 */
class EditEvent extends Component {
   state = {
     name: this.props.loadedEvent.eventName,
     date: this.props.loadedEvent.eventdate,
     time: this.props.loadedEvent.time,
     purpose: this.props.loadedEvent.purpose,
     center: this.props.loadedEvent.centerId
   }

  /**
   * @description run action on component mount to reload data
   *
   * @param {any} props.params.token
   *
   * @memberof EditEvent
   */
   componentWillMount() {
     this.props.onOneEvent(this.props.match.params.id);
   }

  /**
   * @description update component state with current value in dom
   *
   * @param {any} event
   *
   * @memberof EditEvent
   *
   * @returns {void}
   */
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  /**
   * @description vaildate data in state
   * sends state to api with action dispatch
   * @param {any} event
   *
   * @memberof EditEvent
   *
   * @returns {void}
   */
   onSubmit = (e) => {
     e.preventDefault();
     if (this.state.name === '') {
       toast.error('Event Name cannot be blank');
     } else if (this.state.date === '') {
       toast.error('Event Date cannot be blank');
     } else if (this.state.time === '') {
       toast.error('Event Time cannot be blank');
     } else if (this.state.purpose === '') {
       toast.error('Event Purpose cannot be blank');
     } else if (this.state.center === '') {
       toast.error('You have to choose a Center');
     } else {
       this.props.initEditEvent(
         this.props.match.params.id, this.state,
         this.props.history
       );
     }
   }
   /**
   * @description get selectCenter id and state state
   * @param {any} event
   *
   * @memberof EditEvent
   *
   * @returns {void}
   */
   selectCenter = (id) => {
     this.state.center = id;
   }

   /**
   * @description renders component to the DOM
   *
   * @memberof EditEvent
   *
   * @returns {JSX} JSX representation of component
   */
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

// EditEvent.propTypes = {
//   onOneEvent: PropTypes.func.isRequired,
//   initEditEvent: PropTypes.func.isRequired,
//   loadedEvent: PropTypes.shape({
//     eventName: PropTypes.string,
//     eventdate: PropTypes.string,
//     purpose: PropTypes.string,
//     time: PropTypes.string,
//     userId: PropTypes.number,
//     centerId: PropTypes.number,
//   }).isRequired,
//   history: PropTypes.shape({}).isRequired,
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string,
//     }),
//   }).isRequired,
// };


const mapStateToProps = state => ({
  loadedEvent: state.events.loadedEvent,
  error: state.events.error
});

const mapDispatchToProps = dispatch => ({
  onOneEvent: id => dispatch(action.initGetOneEvent(id)),
  initEditEvent: (id, events, history) =>
    dispatch(action.initEditEvent(id, events, history)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEvent);

