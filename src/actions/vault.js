import React from 'react';
import { motion } from 'framer-motion';
import './vault.css';
import VaultIcon from '../Iconography/square-placeholder.svg'; // Ensure the correct path

const Vault = () => {
  return (
    <motion.div
      className="vault-pill-container"
      initial={{ x: 100, y: 100, rotate: -45 }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="vault-icon" style={{ backgroundImage: `url(${VaultIcon})` }}></div>
    </motion.div>
  );
};

export default Vault;