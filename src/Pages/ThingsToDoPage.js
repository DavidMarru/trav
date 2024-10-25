import React from 'react';

import BACKGRAND from "../img/Leonardo_Kino_XL_COLOSSEUM_ITALY_2.jpg"; // Updated path for background image
import Footer from "../Pages/Footer"; // Assuming Footer is in a parent directory
import ThingsToDoCardsWrapper from "./ThingsToDoCon/ThingsToDoCardsWrapper"; // Assuming ThingsToDoCardsWrapper is in a parent directory
import Header from "./Header"; // Updated path for Header component
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