import React from 'react';
import './galaxy.css';
import galaxyMp4 from './galaxy.mp4'; // Ensure the path is correct

const Galaxy = () => {
  return (
    <div className="galaxy-container">
      <video autoPlay loop muted className="galaxy-video">
        <source src={galaxyMp4} type="video/mp4" />
      </video>
    </div>
  );
};

export default Galaxy;