import React, { useState, useEffect } from 'react';
import HeardLine from '../../img/heart-svgrepo-com (1).svg';
import HeardFull from '../../img/heart-svgrepo-com (2).svg'; 

function LikeButton() {
  const [toggleLike, setToggleLike] = useState(false); 

  useEffect(() => {
    const savedToggleState = localStorage.getItem('toggleLike');
    if (savedToggleState) {
      setToggleLike(JSON.parse(savedToggleState));
    }
  }, []);

  const handleToggleLike = () => {
    setToggleLike(prevState => {
      const newState = !prevState; 
      localStorage.setItem('toggleLike', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className={`like ${toggleLike ? 'Toggled' : ''}`}>
      <img 
        className='HeartLine' 
        onClick={handleToggleLike} 
        src={toggleLike ? HeardFull : HeardLine} 
        alt="like button" 
      />
    </div>
  );
}

export default LikeButton;
