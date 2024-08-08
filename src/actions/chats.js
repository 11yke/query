import React, { useState } from 'react';
import './chats.css';

const Chats = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="chats" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {['Chat 1', 'Chat 2', 'Chat 3', 'Chat 4', 'Chat 5', 'Chat 6', 'Chat 7', 'Chat 8'].map((chatName, index) => (
        <div key={index} className="chat-line-wrapper">
          <div
            className={`chat-line ${index === 0 ? 'orange' : 'grey'}`}
            style={{
              transform: isHovered ? 'scale(2)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          ></div>
          <span className={`chat-text ${index === 0 ? 'active-chat' : 'inactive-chat'}`} style={{ opacity: isHovered ? 1 : 0 }}>
            {chatName}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Chats;