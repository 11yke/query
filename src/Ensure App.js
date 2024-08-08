import React, { useState, useEffect } from 'react';
import './App.css';
import Query from './query/query';
import Galaxy from './visuals/galaxy/galaxy';
import Mask from './visuals/mask/mask';
import Call from './actions/call';
import Messages from './actions/messages'; // Import the new Messages component

function App() {
  const [isActive, setIsActive] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleActivity = () => {
      setIsActive(true);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        setIsActive(false);
      }, 5 * 60 * 1000); // 5 minutes
      setTimeoutId(newTimeoutId);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, [timeoutId]);

  const handleQuerySubmit = (query) => {
    console.log('Query submitted:', query);
  };

  return (
    <div className="App">
      <Call /> {/* This should be at the top left */}
      <Messages /> {/* This should be at the top right */}
      {isActive && <Mask />}
      {!isActive && <Galaxy />}
      <Query onSubmit={handleQuerySubmit} />
    </div>
  );
}

export default App;