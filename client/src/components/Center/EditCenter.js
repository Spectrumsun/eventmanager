import React from 'react';
import CenterFrom from './CenterForm';

const editCenter = () => (
  <div className="container" style={{ paddingTop: '100px' }}>
    <div className="card card w-50 loginCard ">
      <div className="card-header dark">
        <h1 className="color">Edit Center</h1>
      </div>
      <CenterFrom />
    </div>
  </div>
);

export default editCenter;
