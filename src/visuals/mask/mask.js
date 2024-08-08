import React from 'react';
import './mask.css';
import MaskGif from './mask.gif';

const Mask = () => {
  return (
    <div className="mask-container">
      <img src={MaskGif} alt="Mask" className="mask-image" />
    </div>
  );
};

export default Mask;