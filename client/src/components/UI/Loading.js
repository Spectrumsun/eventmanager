import React from 'react';

const Loading = () => (
  <div className="container" style={{ paddingTop: '100px' }}>
    <div className="loader" />
    <p className="center-item shadow">
      Unable to connect Reaource Not Found or invalid Url.
        Refresh your browser or check your internet connection
    </p>
    <div className="container" style={{ paddingTop: '200px' }} />
  </div>
);

export default Loading;

