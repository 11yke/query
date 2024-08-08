import React from 'react';
import './galaxy.css';

const Galaxy = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={require('./galaxy.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Galaxy;