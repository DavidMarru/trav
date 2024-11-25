import React, { useState } from "react";
import "../index.css";
import LocationCards from "./HomeCon/LocationCards";
import Header from "./Header";
import MoreDestinotions from "./HomeCon/moreDestinotions";
import DestinationDetails from "./HomeCon/DestinationDetails";
import StackedCards from "./HomeCon/StackedCards";
import destinationsData from "./HomeCon/DestinationsData";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Pages/Footer";
import PhoneNav from "./PhoneNav";

function Home() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [defaultDestination, setDefaultDestination] =
    useState("ANGKOR WAT SUNRISE");
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isChanged, setIsChanged] = useState(false); // Track if destination has changed

  const handleBookNow = (destination) => {
    console.log(`Book Now for: ${destination}`);
  };

  const handleDetails = (destination) => {
    setSelectedDestination(destination);
    setIsVisible(true);
    setIsActive(true);
    document.body.classList.add('noScroll');
  };

  const handleCloseDetails = () => {
    setSelectedDestination(null);
    setIsActive(false);
    document.body.classList.remove('noScroll');

    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const currentDestination = destinationsData.find(
    (destination) => destination.name === selectedDestination
  );

  const defaultDestinationData = destinationsData.find(
    (destination) => destination.name === defaultDestination
  );

  const handleDefaultChange = (newDestination) => {
    setDefaultDestination(newDestination);
    setIsChanged(true); // Mark that a change has occurred
    console.log("setDefaultDestination:", newDestination);

    // Reset the change state after a delay to allow animation
    setTimeout(() => {
      setIsChanged(false);
    }, 300); // Match with animation duration
  };

  return (
    <div className={`HomeBody ${isVisible ? "noScroll" : ""}`} >
      <PhoneNav />
      <div className="detailsContainer">
          <div
              className={`showDetails ${selectedDestination ? "active" : ""}`}
            >
              {selectedDestination && currentDestination && (
                  <>
                  <button className="close-button" onClick={handleCloseDetails}>
                    Close
                  </button>
                  <DestinationDetails
                    name={currentDestination.name}
                    country={currentDestination.country}
                    lowestPrice={currentDestination.lowestPrice}
                    nights={currentDestination.nights}
                    reviews={currentDestination.reviewCount}
                    images={currentDestination.images}
                    images2={currentDestination.images2}
                    images3={currentDestination.images3}
                    images4={currentDestination.images4}
                    images5={currentDestination.images5}
                  />
                </>
              )}
            </div>

          </div>
      <div className="HomeBG-overlayer"> </div>
      <div className="BackgroudImg">
        {/* Render default destination images with motion effects only on changes */}
        <AnimatePresence>
          {defaultDestinationData && defaultDestinationData.images && (
            <div className="motionImage">
            <motion.div
              className="BackgroudImg"
              key={defaultDestinationData.name} // Unique key to trigger re-mount
              initial={{ opacity: 0, x: -20 }} // Starting state
              animate={{ opacity: 1, x: 0}} // Animate to this state
              exit={{ opacity: 1, x: -20}} // Exit animation
              transition={{ duration: 0.5 }} // Transition duration
            >
              {defaultDestinationData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={defaultDestinationData.name}
                />
              ))}
            </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Conditionally render images for the current destination */}
        {currentDestination && currentDestination.images && (
          <div className="BackgroudImg">
            {currentDestination.images.map((image, index) => (
              <img key={index} src={image} alt={currentDestination.name} />
            ))}
          </div>
        )}
      </div>
      <div className="box">
        <div className="wrapper">
          <StackedCards />
          <div
            className={`backDrop ${isActive ? "active" : ""}`}
            style={{ display: isVisible ? "block" : "none" }}
          ></div>

          <Header />

          <div className="locationScreen">
            <AnimatePresence>
              {/* Dynamic Default Destination with Motion */}
              {defaultDestinationData && (
                <motion.div
                  key={defaultDestinationData.name} // Key to re-mount on changes
                  initial={{ opacity: 0, x: 20 }} // Start from below
                  animate={{ opacity: 1, x: 0 }} // Fade in and slide up
                  exit={{ opacity: 0, x: -20 }} // Fade out and slide down
                  transition={{ duration: 0.5 }} // Transition duration
                >
                </motion.div>
              )}
            </AnimatePresence>
           
          </div>
          <div className="homeFlex">
              <LocationCards
                destination={defaultDestinationData.name}
                country={defaultDestinationData.country}
                details={() => handleDetails(defaultDestinationData.name)}
                onBookNow={() => handleBookNow(defaultDestinationData.name)}
              />
            <MoreDestinotions onDestinationChange={handleDefaultChange} />
          </div>
        </div>
      </div>
      {/* <div className="home-FT"> */}
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default Home;
