import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ArrowTopIcon from '../Iconography/arrow-top.svg';
import MicrophoneIcon from '../Iconography/microphone, mic, sound, podcast.svg';
import PaperclipIcon from '../Iconography/paperclip-2, attachment, attach, paper clip.svg';

import './query.css';

const Query = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const inputContainer = document.querySelector('.input-container');

    const handleMouseMove = (e) => {
      const rect = inputContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      inputContainer.style.setProperty('--x', `${x}px`);
      inputContainer.style.setProperty('--y', `${y}px`);
    };

    const handleMouseLeave = () => {
      inputContainer.style.setProperty('--x', `50%`);
      inputContainer.style.setProperty('--y', `50%`);
    };

    inputContainer.addEventListener('mousemove', handleMouseMove);
    inputContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      inputContainer.removeEventListener('mousemove', handleMouseMove);
      inputContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onSubmit(inputValue);
      setInputValue('');
      setIsSubmitted(true);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="input-container"
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      style={{
        position: 'absolute',
        bottom: isSubmitted ? '12px' : '50%',
        left: '50%',
        transform: isSubmitted ? 'translate(-50%, 0%)' : 'translate(-50%, 50%)',
        transition: "all 0.25s ease-out"
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Message Jokuh"
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        right: 4,
        transform: inputValue ? "translateY(-200%)" : "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        gap: 4,
        transition: "all 0.2s ease-in-out",
      }}>
        <Icon image={MicrophoneIcon} />
        <Icon image={PaperclipIcon} />
      </div>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: 4,
        transform: inputValue ? "translateY(-50%)" : "translateY(200%)",
        transition: "all 0.2s ease-in-out",
      }}>
        <Icon
          image={ArrowTopIcon}
          styles={{
            background: "white",
            color: "black",
          }}
        />
      </div>
    </motion.form>
  );
};

export default Query;

function Icon({ styles, image }) {
  return (
    <div style={{ height: 36, width: 36, display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #141414", borderRadius: "100vmax", transition: "all 1s ease-in", ...styles }}>
      <img src={image} style={{ height: 16, width: 16 }} alt="" />
    </div>
  )
}