import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Display from './getEvent';
import Loading from '../UI/Loading';
import Footer from '../UI/Footer';
import * as actions from '../../store/actions/index';

const imageUrl = 'https://res.cloudinary.com/skybound/' +
                'image/upload/s--FNAPSR5p--' +
                '/v1524387956/eventmanager/' +
                '1524387954621-99fa41ccf13172' +
                '4-a-nw-p.jpg.jpg';

/**
 * @class ViewEvent
 *
 * @extends {React.Component}
 */
class ViewEvent extends Component {
  /**
   * @description run action on component mount to reload data
   *
   * @param {any} props.params.token
   *
   * @memberof EditEvent
   */
  componentDidMount() {
    this.props.onInitEvent();
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof EditEvent
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const noEvent = (
      <div className="thetitle">
        <h3 className="noevent"> You dont have any event event</h3>
      </div>
    );
    const events = this.props.events ===
     undefined || this.props.error != false ?
       <Loading /> : this.props.events.map(event =>
         (<Link
           to={`/events/${event.id}`}
           key={event.id}
           style={{ color: 'black' }}
         >
           <Display
             eventName={event.eventName}
             startDate={event.startDate}
             endDate={event.endDate}
             purpose={event.purpose}
             centerImage={event.centers === null ?
              imageUrl : event.centers.imageurl
            }
           />
         </Link>
         ));
    /**
   * @description renders component to the DOM
   *
   * @memberof AddEvent
   *
   * @returns {JSX} JSX representation of component
   */
    return (
      <div>
        <div className="center thebody" >
          <h1 style={{ textAlign: 'center' }}>Events</h1>
          {this.props.events.length === 0 ? noEvent : events }
        </div>
        <Footer />
      </div>
    );
  }
}

ViewEvent.propTypes = {
  onInitEvent: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  events: state.events.events,
  error: state.events.error
});

const mapDispatchToProps = dispatch => ({
  onInitEvent: () => dispatch(actions.initEvents())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewEvent);
