import React from 'react';
import { motion } from 'framer-motion';
import './messages.css';
import MessageIcon from '../Iconography/bubble-6, message.svg'; 

const Messages = () => {
  return (
    <motion.div
      className="messages-pill-container"
      initial={{ x: 100, y: -100, rotate: 45 }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="red-dot"></div>
      <img src={MessageIcon} alt="Messages" className="message-icon" />
    </motion.div>
  );
};

export default Messages;