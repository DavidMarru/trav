import LoginContainer from '../LoginContainer'
import './TestPage.css'
import Footer from "../Pages/Footer"; 
import BACKGRAND from "../img/Leonardo_Kino_XL_Santorini_GREECE_1.jpg"; // Updated path for background image
import "./ThingsToDoCon/ThingsToDo.css";


function SignInPage () {
    return (
        <div className="HolidayRentailsBody">
        <div className="ThingsToDo-Background">
            <div className="overLayer"></div>
            <img className="ThingsBackground" src={BACKGRAND} alt="pixabay" />
        </div>
            <LoginContainer />
            <Footer />
        </div>
    );
}

export default SignInPage