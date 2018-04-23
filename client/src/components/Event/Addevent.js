import React, { Component } from 'react';
import { connect } from 'react-redux';
import toast from 'toastr';
import PropTypes from 'prop-types';
import EventForm from './Form/EventForm';
import * as action from '../../store/actions/index';

/**
 * @class AddEvent
 *
 * @extends {React.Component}
 */
class AddEvent extends Component {
   state = {
     name: '',
     date: '',
     time: '',
     purpose: '',
     center: ''
   }

   /**
   * @description update component state with current value in dom
   *
   * @param {any} event
   *
   * @memberof AddEvent
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
   * @memberof AddEvent
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
      this.props.initPostEvent(
        this.state,
        this.props.history
      );
    }
  }

  /**
   * @description get selectCenter id and state state
   * @param {any} event
   *
   * @memberof AddEvent
   *
   * @returns {void}
   */
  selectCenter = (id) => {
    this.state.center = id;
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof AddEvent
   *
   * @returns {JSX} JSX representation of component
   */
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
            selectCenter={id => this.selectCenter(id)}
          />
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  initPostEvent: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};


const mapDispatchToProps = dispatch => ({
  initPostEvent: (input, history) =>
    dispatch(action.initPostEvent(input, history)),
});


export default connect(null, mapDispatchToProps)(AddEvent);

