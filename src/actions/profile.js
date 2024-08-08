import React from 'react';
import { motion } from 'framer-motion';
import './profile.css';
import avatar from '../visuals/avatars/leafre.png'; // Ensure the correct path

const Profile = () => {
  return (
    <motion.div
      className="profile-pill-container"
      initial={{ x: -100, y: 100, rotate: 45 }}
      animate={{ x: 0, y: 0, rotate: 45 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
    </motion.div>
  );
};

export default Profile;