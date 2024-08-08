import React, { useState } from 'react';
import { motion } from 'framer-motion';

import ArrowTopIcon from '../Iconography/arrow-top.svg';
import MicrophoneIcon from '../Iconography/microphone, mic, sound, podcast.svg';
import PaperclipIcon from '../Iconography/paperclip-2, attachment, attach, paper clip.svg';

import './query.css';

const Query = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      // initial={{ y: '-50%', x: '-50%' }}
      // animate={{
      //   // y: isSubmitted ? "50%" : "-50%",
      //   y: "calc(100vh - 152px - 12px)",
      //   x: "-50%",
      // }}
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
        transform: inputValue? "translateY(-50%)" : "translateY(200%)",
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