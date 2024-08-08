import React from 'react';
import './messages.css';
import MessageIcon from '../Iconography/bubble-6, message.svg'; // Import the SVG for the message icon

const Messages = () => {
  return (
    <div className="messages-pill-container">
      <div className="red-dot"></div>
      <img src={MessageIcon} alt="Messages" className="message-icon" />
    </div>
  );
};

export default Messages;