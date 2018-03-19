import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import Display from './getEvent';
import * as actions from '../../store/actions/index';


class ViewEvent extends Component {
  componentDidMount() {
    this.props.onInitEvent();
  }
  render() {
    const isLoading = (
      <div>
        <div className="loader" />
        <p className="center-item shadow" >Unable to connect. Refresh your browser or check your internet connection</p>
      </div>
    );

    const events = this.props.events === undefined || this.props.error != false ? isLoading : this.props.events.map(event =>
      (<Link to={`/events/${event.id}`} key={event.id} style={{ color: 'black' }}>
        <Display
          eventName={event.eventName}
          eventdate={event.eventdate}
          purpose={event.purpose}
        />
       </Link>
      ));

    return (
      <div>
        <div className="container" style={{ paddingTop: '100px' }}>
          <h1 style={{ textAlign: 'center' }}>Events</h1>
          {events}
        </div>
      </div>
    );
  }
}
ViewEvent.propTypes = {
  onInitEvent: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  error: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  events: state.events.events,
  error: state.events.error
});

const mapDispatchToProps = dispatch => ({
  onInitEvent: () => dispatch(actions.initEvents())
});


export default connect(mapStateToProps, mapDispatchToProps)(ViewEvent);
