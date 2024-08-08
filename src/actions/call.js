import React from 'react';
import { motion } from 'framer-motion';
import './call.css';
import CallIcon from '../Iconography/call.svg';

const Call = () => {
  return (
    <motion.div
      className="call-pill-container"
      initial={{ x: -100, y: -100, rotate: -45 }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="green-dot"></div>
      <img src={CallIcon} alt="Call" className="call-icon" />
    </motion.div>
  );
};

export default Call;