import React from 'react';
import capping from "../../img/tent-in-the-forest.png"; 
import hiking from "../../img/trekking.png"; 
import honeyMoon from "../../img/ballroom-dance.png"; 
import party from "../../img/dancing-party.png"; 
import relaxing from "../../img/sunbathe.png"; 
import rhinoceros from "../../img/rhinoceros.png"; 
import scubaDiving from "../../img/scuba-diving.png";
import './Surjections.css'

function Surjections () {
    return (
        <div className="surjections">
            <div className="surjections-icons">
                <div className="surjections-box">
                    <img className="img" alt="Honey moon" src={honeyMoon} />
                    <div className="text-wrapper">HONEY MOON</div>
                </div>
                <div className="surjections-box">
                    <img className="img" alt="Hiking" src={hiking} />
                    <div className="text-wrapper">HIKKING</div>
                </div>
                <div className="surjections-box">
                    <img className="img" alt="Capping" src={capping} />
                    <div className="text-wrapper">Capping</div>
                </div>
                <div className="surjections-box">
                    <img className="img" alt="Scuba diving" src={scubaDiving} />
                    <div className="text-wrapper">EXPLORING</div>
                </div>
                <div className="surjections-box">
                    <img className="img" alt="Rhinoceros" src={rhinoceros} />
                    <div className="text-wrapper">HIKKING</div>
                </div>
                <div className="surjections-box">
                    <img className="img" alt="Party" src={party} />
                    <div className="text-wrapper">ALL DAY PARTYING</div>
                </div>
                <div className="surjections-box">
                    <img className="img" alt="Relaxing" src={relaxing} />
                    <div className="text-wrapper">RELAXING</div>
                </div>
            </div>
        </div>
    );
};

export default Surjections