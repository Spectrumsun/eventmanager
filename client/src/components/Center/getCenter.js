import React from 'react';
import PropTypes from 'prop-types';


const getCenter = props => (
  <div
    onClick={props.clicked}
    className="card d-lg-inline-block"
    style={{ width: '14rem' }}
  >
    <img
      className="card-img-top"
      src={props.image}
      style={{ objectFit: 'cover', height: '15rem' }}
      alt="Card cap"
    />
    <div className="card-body">
      <h4 className="card-title">{props.centerName}</h4>
      <h6
        className="card-subtitle mb-2 text-muted"
      >
        {props.address}
      </h6>
      <h5 className="card-link">View More</h5>
    </div>
  </div>
);

getCenter.propTypes = {
  centerName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};


export default getCenter;
