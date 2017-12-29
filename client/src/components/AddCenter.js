import React from 'react';
import CenterFrom from './CenterForm';

const addCenter = () => (
  <div className="container">
    <div className="card card w-50 loginCard ">
      <div className="card-header dark">
        <h1 className="color">Add Center</h1>
      </div>
      {CenterFrom}
    </div>
  </div>
);

export default addCenter;
