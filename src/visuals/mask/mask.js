import React from 'react';
import './mask.css';
import maskGif from './mask.gif'; // Ensure the path is correct

const Mask = () => {
  return (
    <div className="mask-container">
      <img src={maskGif} alt="Mask" className="mask-gif" />
    </div>
  );
};

export default Mask;