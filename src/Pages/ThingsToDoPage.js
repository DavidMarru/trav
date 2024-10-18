import BACKGRAND from "../img/pexels-pixabay-86703.jpg"; // Updated path for background image
import Footer from "../Pages/Footer"; // Assuming Footer is in a parent directory
import { Reveiw } from "./ThingsToDoCon/Reveiw"; // Assuming Reveiw component is in a parent directory
import { ReveiwBlock } from "./ThingsToDoCon/ReveiwBlock"; // Assuming ReveiwBlock component is in a parent directory
import { ThingsToDoCards } from "./ThingsToDoCon/ThingsToDoCards"; // Assuming ThingsToDoCards is in a parent directory
import ThingsToDoCardsWrapper from "./ThingsToDoCon/ThingsToDoCardsWrapper"; // Assuming ThingsToDoCardsWrapper is in a parent directory
import Header from "./Header"; // Updated path for Header component
import Star from "../img/star-svgrepo-com.svg"; // Assuming Star component is in the same directory
import capping from "../img/tent-in-the-forest.png"; // Correct the image paths
import hiking from "../img/trekking.png";
import honeyMoon from "../img/ballroom-dance.png";
import party from "../img/dancing-party.png";
import relaxing from "../img/sunbathe.png";
import rhinoceros from "../img/rhinoceros.png";
import scubaDiving from "../img/scuba-diving.png";
import "./ThingsToDoCon/ThingsToDo.css";
import Tittle from '../Tittle';


function ThingsToDoPage() {
    return (
    <div className="ThingsToDoBody">
        <div className="ThingsToDo-Background">
            <div className="overLayer"></div>
            <img className="ThingsBackground" src={BACKGRAND} alt="pixabay" />
        </div>
        <div className="wrapper">
            <div className='M5Rem'>
            <Header />
            </div>
        </div>
        <div className="wrapper2">
            <div className="THINGS-TO-DO-PAGE">
            <Tittle
                TittleName={'THINGS TO DO'}
            />
            <ThingsToDoCardsWrapper
            Row="left"
            />            
        </div>
        </div>
        <div className="ToDO-Footer">
            <Footer />
        </div>

    </div>
    );
}

export default ThingsToDoPage;