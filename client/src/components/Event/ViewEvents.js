import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Display from './getEvent';
import * as actions from '../../store/actions/index';


class ViewEvent extends Component {
  componentDidMount() {
    this.props.onInitEvent();
  }
  render() {
    const isLoading = (
       <div className="loader" />
    );

    const events = this.props.events === undefined ? isLoading : this.props.events.map(event =>
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


const mapStateToProps = state => ({
  events: state.events.events
});

const mapDispatchToProps = dispatch => ({
  onInitEvent: () => dispatch(actions.initEvents())
});


export default connect(mapStateToProps, mapDispatchToProps)(ViewEvent);
