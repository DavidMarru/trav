import React, { useState } from "react";
import "./PhoneNav.css";
import { Link } from 'react-router-dom';

function PhoneNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.classList.remove("noScroll");
    } else {
      document.body.classList.add("noScroll");
    }
  };

  return (
    <div className="burger-menu">
      <div
        className={`burger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
            <p>|</p>
            <Link to="/ThingsToDoPage">THINGS TO DO</Link>
            <p>|</p>
            <Link to="/HolidayRentals">HOLIDAY RENTALS</Link>
            <p>|</p>
            <Link to="/aboutus">ABOUT US</Link>
            {/* <p>|</p>
            <Link to="/TestPage">Test Page</Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PhoneNav;
