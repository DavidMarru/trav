import React from "react";
import capping from "../../img/tent-in-the-forest.png";
import hiking from "../../img/trekking.png";
import honeyMoon from "../../img/ballroom-dance.png";
import party from "../../img/dancing-party.png";
import relaxing from "../../img/sunbathe.png";
import rhinoceros from "../../img/rhinoceros.png";
import scubaDiving from "../../img/scuba-diving.png";
import './Surjections.css';

function Surjections({ selectedFilter, setSelectedFilter }) {
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter === selectedFilter ? "" : filter); // Toggle filter off if already selected
  };

  return (
    <div className="surjections">
      <div className="surjections-icons">
        <div
          className={`surjections-box ${selectedFilter === "HONEY MOON" ? "selected" : ""}`}
          onClick={() => handleFilterClick("HONEY MOON")}
        >
          <img className="img" alt="Honey moon" src={honeyMoon} />
          <div className="text-wrapper">HONEY MOON</div>
        </div>
        <div
          className={`surjections-box ${selectedFilter === "HIKING" ? "selected" : ""}`}
          onClick={() => handleFilterClick("HIKING")}
        >
          <img className="img" alt="Hiking" src={hiking} />
          <div className="text-wrapper">HIKING</div>
        </div>
        <div
          className={`surjections-box ${selectedFilter === "CAPPING" ? "selected" : ""}`}
          onClick={() => handleFilterClick("CAPPING")}
        >
          <img className="img" alt="Capping" src={capping} />
          <div className="text-wrapper">CAPPING</div>
        </div>
        <div
          className={`surjections-box ${selectedFilter === "EXPLORING" ? "selected" : ""}`}
          onClick={() => handleFilterClick("EXPLORING")}
        >
          <img className="img" alt="Scuba diving" src={scubaDiving} />
          <div className="text-wrapper">EXPLORING</div>
        </div>
        <div
          className={`surjections-box ${selectedFilter === "RELAXING" ? "selected" : ""}`}
          onClick={() => handleFilterClick("RELAXING")}
        >
          <img className="img" alt="Relaxing" src={relaxing} />
          <div className="text-wrapper">RELAXING</div>
        </div>
        
        <div
          className={`surjections-box ${selectedFilter === "ALL DAY PARTYING" ? "selected" : ""}`}
          onClick={() => handleFilterClick("ALL DAY PARTYING")}
        >
          <img className="img" alt="Party" src={party} />
          <div className="text-wrapper">ALL DAY PARTYING</div>
        </div>
      </div>
      <div className="removeFilter" onClick={() => setSelectedFilter("")}>
        <p>Remove Filter</p>
      </div>
    </div>
  );
}

export default Surjections;
