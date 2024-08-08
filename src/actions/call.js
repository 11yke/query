import React from 'react';
import './call.css';
import CallIcon from '../Iconography/call.svg'; // Import the SVG

const Call = () => {
  return (
    <div className="call-pill-container">
      <div className="green-dot"></div>
      <img src={CallIcon} alt="Call" className="call-icon" />
    </div>
  );
};

export default Call;