import React, { useState } from 'react';
import './PhoneNav.css'; // Import the CSS for styling

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open or closed

  // Function to toggle the menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      {/* Hamburger Icon */}
      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      {/* Side Menu */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/things-to-do">Things to Do</a></li>
          <li><a href="/holiday-rentals">Holiday Rentals</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/test-page">Test Page</a></li>
          <li><a href="/SignInPage">SIGN IN</a></li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
