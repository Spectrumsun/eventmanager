import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description renders component to the DOM
 *
 * @function display
 *
 * @returns {JSX} JSX component to disply the event
 */
const display = props => (
  <div className="card d-lg-inline-block d-flex" style={{ width: '20rem' }}>
    <img
      className="card-img-top"
      src={props.centerImage}
      style={{ objectFit: 'cover', height: '15rem' }}
      alt="Card cap"
    />
    <div className="card-body .flex-fill">
      <h4 className="card-title">{props.eventName}</h4>
      <span className="card-text">{props.startDate}</span> To <span className="card-text">{props.endDate}</span>
      <h6 className="card-text">{props.purpose}</h6>
      <h6 className="btn btn-primary" id="viewEvents">View more</h6>
    </div>
  </div>
);

display.propTypes = {
  eventName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  centerImage: PropTypes.string.isRequired
};

export default display;

