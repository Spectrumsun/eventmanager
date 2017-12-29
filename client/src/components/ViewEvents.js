import React from 'react';


const viewEvent = () => (
  <div className="container" style={{ paddingTop: '100px' }}>
    <h1 style={{ textAlign: 'center' }}>Events</h1>
    <div className="card d-lg-inline-block" style={{ width: '20rem' }}>
      <img className="card-img-top" src="./image/image1.jpg" alt="Card cap" />
      <div className="card-body">
        <h4 className="card-title">Birthday Party</h4>
        <p className="card-text">A event to celebrate Life</p>
        <h6 className="card-text">12-12-2017</h6>
        <h6 className="card-text">10:55 AM</h6>
        <a href="eventinfo.html" className="btn btn-primary">View</a>
      </div>
    </div>
    <div className="card d-lg-inline-block" style={{ width: '20rem' }}>
      <img className="card-img-top" src="./image/image1.jpg" alt="Card cap" />
      <div className="card-body">
        <h4 className="card-title">Wedding </h4>
        <p className="card-text">A wedding party.</p>
        <h6 className="card-text">12-12-2017</h6>
        <h6 className="card-text">10:55 AM</h6>
        <a href="eventinfo.html" className="btn btn-primary">View</a>
      </div>
    </div>
  </div>

);

export default viewEvent;
