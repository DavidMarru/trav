// Header.js
import './Header.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
    return (
        <div className="header">
            <div className="mainNav">
                <div className="navLinks">
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
                </div>

                <div className="signIn">
                    <Link to="/SignInPage">SIGN IN</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
