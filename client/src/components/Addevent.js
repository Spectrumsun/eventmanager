import React from 'react';
import EventForm from './EventForm';

const eventCenter = () => (
  <div className="container" style={{ paddingTop: '100px' }}>
    <div className="card card w-50 loginCard">
      <div className="card-header dark">
        <h1 className="color">Add Event</h1>
      </div>
      <EventForm />
    </div>
  </div>
);

export default eventCenter;
