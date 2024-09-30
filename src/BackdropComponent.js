import React, { useState } from 'react';

function BackdropComponent() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Manage visibility for display:none

  const handleCloseDetails = () => {
    // Step 1: Set 'isActive' to false to trigger opacity transition
    setIsActive(false);

    // Step 2: After the transition delay, set 'isVisible' to false
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // Matches the CSS transition duration (0.5s in this example)
  };

  const openDetails = () => {
    // Step 1: Make visible, set display to block
    setIsVisible(true);

    // Step 2: Add a slight delay, then activate the class for smooth transition
    setTimeout(() => {
      setIsActive(true);
    }, 10); // Small timeout to allow rendering of the visible state
  };

  return (
    <>
      <button onClick={openDetails}>Open</button>
    </>
  );
}

export default BackdropComponent;
