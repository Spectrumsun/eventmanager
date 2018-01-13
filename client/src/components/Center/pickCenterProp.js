import React from 'react';

const display = props => (
  <div onClick={props.clicked} className="card d-lg-inline-block" style={{ width: '20rem' }}>
    <div className="card-body">
      <h6 className="card-title"><strong>Name: </strong>{props.centerName}</h6>
      <h6 className="card-title "><strong>Address: </strong>{props.address}</h6>
      <h6 className="card-title "><strong>City: </strong>{props.city}</h6>
      <h6 className="card-title "><strong>Availability: </strong>{props.availability}</h6>
      <h6 className="card-title "><strong>Facility</strong></h6>
      <h6 className="card-title ">{props.facility}</h6>
      <a  className="card-link" value={props.id}>Select</a>
    </div>
  </div>
);


export default display;
