import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './PhoneNav.css';

function TestPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInversed, setIsInversed] = useState(false);
  const [destination, setDestination] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const interchange = () => {
    setIsInversed(!isInversed);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const clearDestination = () => {
    setDestination('');
  };

  return (
    <div className="header">
      <div className="mainNav">
        <div className="navLinks">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/ThingsToDoPage">THINGS TO DO</Link>
            </li>
            <li>
              <Link to="/HolidayRentals">HOLIDAY RENTALS</Link>
            </li>
            <li>
              <Link to="/aboutus">ABOUT US</Link>
            </li>
            <li>
              <Link to="/TestPage">Test Page</Link>
            </li>
          </ul>
        </div>

        <div className="signIn">
          <Link to="/SignInPage">SIGN IN</Link>
        </div>
      </div>

      {/* Phone Navigation (Hamburger Menu) */}
      <div className="phoneNav">
        <div className={`b-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {/* Updated phone nav links */}
            <li><Link className="b-link" to="/">Home</Link></li>
            <li><Link className="b-link" to="/ThingsToDoPage">Things To Do</Link></li>
            <li><Link className="b-link" to="/HolidayRentals">HOLIDAY RENTALS</Link></li>
            <li><Link className="b-link" to="/aboutus">ABOUT US</Link></li>
          </ul>
        </div>

        {/* Hamburger menu button */}
        <div className="b-container" onClick={toggleMenu}>
          <div className={`b-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="b-bun b-bun--top"></div>
            <div className="b-bun b-bun--mid"></div>
            <div className="b-bun b-bun--bottom"></div>
          </div>
        </div>
      </div>

      {/* Interchangeable Elements */}
      <div id="element1" className={isInversed ? 'inversed' : ''}>
        {/* Some content here */}
        Element 1
      </div>
      <div id="element2">
        {/* Some other content here */}
        Element 2
      </div>
      <button onClick={interchange}>Interchange Elements</button>

      {/* Destination Input and Directions Button */}
      <input
        type="text"
        id="destination"
        value={destination}
        onChange={handleDestinationChange}
        placeholder="Enter destination"
      />
      <div
        id="show-directions"
        className={destination ? 'animated fadeInUp delay-1s' : ''}
        style={{ display: destination ? 'block' : 'none' }}
        onClick={clearDestination}
      >
        Clear Destination
      </div>
    </div>
  );
}

export default TestPage;
