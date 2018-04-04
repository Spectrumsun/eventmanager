import React from 'react';
import PropTypes from 'prop-types';


const display = props => (
  <div className="card d-lg-inline-block" style={{ width: '14rem' }}>
    <img
      className="card-img-top"
      src="https://res.cloudinary.com/skybound/image/upload/v1521281912/image1.jpg"
      style={{ objectFit: 'cover', height: '15rem' }}
      alt="Card cap"
    />
    <div className="card-body">
      <h4 className="card-title">{props.eventName}</h4>
      <p className="card-text">{props.eventdate}</p>
      <h6 className="card-text">{props.purpose}</h6>
      <h6 className="btn btn-primary">View more</h6>
    </div>
  </div>
);

display.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventdate: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
};

export default display;

