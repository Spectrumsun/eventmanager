import React from 'react';
import EventForm from './EventForm';

const editEvent = () => (
  <div className="container" style={{ paddingTop: '100px' }}>
    <div className="card card w-50 loginCard">
      <div className="card-header dark">
        <h1 className="color">Edit Event</h1>
        <EventForm />
      </div>
    </div>
  </div>


);

export default editEvent;
