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
                <div className="honey-moon">
                    <img className="img" alt="Honey moon" src={honeyMoon} />
                    <div className="text-wrapper">HONEY MOON</div>
                </div>
                <div className="div">
                    <img className="img" alt="Hiking" src={hiking} />
                    <div className="text-wrapper-2">HIKKING</div>
                </div>
                <div className="div">
                    <img className="img" alt="Capping" src={capping} />
                    <div className="text-wrapper-2">Capping</div>
                </div>
                <div className="exploring">
                    <img className="img" alt="Scuba diving" src={scubaDiving} />
                    <div className="text-wrapper-3">EXPLORING</div>
                </div>
                <div className="wildlife-observation">
                    <img className="img" alt="Rhinoceros" src={rhinoceros} />
                    <div className="text-wrapper-2">HIKKING</div>
                </div>
                <div className="all-day-partying">
                    <img className="img" alt="Party" src={party} />
                    <div className="party">ALL DAY PARTYING</div>
                </div>
                <div className="relaxing">
                    <img className="img" alt="Relaxing" src={relaxing} />
                    <div className="party-2">RELAXING</div>
                </div>
            </div>
        </div>
    );
};

export default Surjections