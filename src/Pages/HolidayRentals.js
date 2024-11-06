import React from "react";
import Header from "./Header";
import "./HolidayRentailsCon/HolidayRentals.css";
import Tittle from "../Tittle";
import Footer from "../Pages/Footer";
import Pixabay from "../img/pexels-pixabay-86703.jpg";
import DestinationsData from "./HomeCon/DestinationsData";
import "./ThingsToDoCon/ThingsToDo.css";
import BACKGRAND from "../img/Leonardo_Kino_XL_SEYCHELLES_Africa_3.jpg"; // Updated path for background image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HolidayRentals() {
  return (
    <div className="HolidayRentailsBody">
      <div className="ThingsToDo-Background">
        <div className="overLayer"></div>
        <img className="ThingsBackground" src={BACKGRAND} alt="pixabay" />
      </div>

      <div className="wrapper">
        <div className="M5Rem">
          <Header />
        </div>
        <div className="HolidayRentals-Tittle">
          <Tittle TittleName={"Holiday Rentals"} />
        </div>
      </div>

      <div className="summery">
        <div className="bg">
          <div className="backgrand" />
        </div>
        <div className="loremIpsumDolorSitAmetConWrapper">
          <div className="summeryText">
            <p>
              Welcome to our Holiday Rentals! We make booking easy, secure, and
              affordable, offering top prices on unique stays worldwide. From
              cozy cottages to luxury villas, we handle every detail so you can
              relax. If there’s something you’re interested in, feel free to
              reach out through our <Link to="/aboutus" className="textLink">Contact section</Link>
               , or
              directly via +1 (123) 456-7890 or contact@worldnavigation.com.
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="wrapper2">
        <div className="Page-Spacing">
          <div className="map">
            {DestinationsData.map((destination) => (
              <div key={destination.id} className="frameParent">
                <div className="instanceChild">
                  <img
                    src={destination.Rentalimage[0]}
                    alt={destination.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "0.15rem", // Consistent with existing styles
                    }}
                  />
                </div>
                <div className="offRoadsWrapper">
                  {destination.rentals.map((rental, index) => (
                    <div key={index} className="offRoads">
                      <p1>{rental.title}</p1>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HolidayRentals;
