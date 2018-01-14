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
      <button type="button" className="btn btn-primary"value={props.key} data-dismiss="modal">Select</button>
    </div>
  </div>
);


export default display;
