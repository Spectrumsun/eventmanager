import React from 'react';


const display = props => (
  <div className="card d-lg-inline-block" style={{ width: '20rem' }}>
    <img className="card-img-top" src="./image/image1.jpg" alt="Card cap" />
    <div className="card-body">
      <h4 className="card-title">{props.eventName}</h4>
      <p className="card-text">{props.eventdate}</p>
      <h6 className="card-text">{props.purpose}</h6>
      <h6 className="btn btn-primary">View more</h6>
    </div>
  </div>
);

export default display;

