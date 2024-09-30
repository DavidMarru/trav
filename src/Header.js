import './Header.css';


function Header() {
    return (
        <div className="header">
  <div className="mainNav">
    <div className="navLinks">
      <li>
        <a href="Home">HOME</a>
        <p>|</p>
        <a href="Thingstodo">THINGS TO DO</a>
        <p>|</p>
        <a href="Travel">TRAVEL</a>
        <p>|</p>
        <a href="HolidayRentails">HOLIDAY RENTAILS</a>
        <p>|</p>
        <a href="Aboutus">ABOUT US</a>
      </li>
    </div>

    <div className="signIn">
      <p>SIGN IN</p>
    </div>
  </div>
</div>

    );
    
}

export default Header;