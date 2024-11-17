import React, { useState } from 'react';
import './PhoneNav.css'; 

function PhoneNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      
      document.body.classList.remove('noScroll');
    } else {
   
      document.body.classList.add('noScroll');
    }

  };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/things-to-do">Things to Do</a></li>
          <li><a href="/holiday-rentals">Holiday Rentals</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/test-page">Test Page</a></li>
        </ul>
      </div>
    </div>
  );
}

export default PhoneNav;
