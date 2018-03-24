import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventForm from './Form/EventForm';
import * as action from '../../store/actions/index';

class AddEvent extends Component {
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
    this.props.initPostEvent(this.state, this.props.history);
  }

  selectCenter = (id) => {
    this.state.center = id;
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
  initPostEvent: (input, history) => dispatch(action.initPostEvent(input, history)),
});


export default connect(null, mapDispatchToProps)(AddEvent);

