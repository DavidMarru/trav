// Home.js
import React, { useState } from 'react';
import './index.css';
import LocationCards from './LocationCards';
import Header from './Header';
import MoreDestinotions from './moreDestinotions';
import DestinationDetails from './DestinationDetails';
import StackedCards from "./StackedCards";
import destinationsData from './DestinationsData';

function Home() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [defaultDestination, setDefaultDestination] = useState("ANGKOR WAT SUNRISE");
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Manage visibility for display:none

    const handleBookNow = (destination) => {
        console.log(`Book Now for: ${destination}`);
    };

    const handleDetails = (destination) => {
        setSelectedDestination(destination);
        setIsVisible(true);
        setIsActive(true);
    };

    const handleCloseDetails = () => {
        setSelectedDestination(null);
        setIsActive(false);
        setTimeout(() => {
            setIsVisible(false);
        }, 500); // Matches the CSS transition duration (0.5s in this example)
    };

    const currentDestination = destinationsData.find(
        (destination) => destination.name === selectedDestination
    );

    const defaultDestinationData = destinationsData.find(
        (destination) => destination.name === defaultDestination
    );

    const handleDefaultChange = (newDestination) => {
        setDefaultDestination(newDestination); 
        console.log('setDefaultDestination:', newDestination)
        // Update default destination based on selection
    };

    return (
        <div className='box'>
            <div className="wrapper">
                <StackedCards />
                <div
                    className={`backDrop ${isActive ? 'active' : ''}`}
                    onClick={handleCloseDetails}
                    style={{ display: isVisible ? 'block' : 'none' }}
                ></div>

                <Header />
                <div className="locationScreen">
                    {/* Dynamic Default Destination */}
                    {defaultDestinationData && (
                        <LocationCards
                            destination={defaultDestinationData.name}
                            country={defaultDestinationData.country}
                            details={() => handleDetails(defaultDestinationData.name)}
                            onBookNow={() => handleBookNow(defaultDestinationData.name)}
                        />
                    )}

                    <MoreDestinotions onDestinationChange={handleDefaultChange} /> {/* Pass the new handler here */}
                </div>

                <div className={`showDetails ${selectedDestination ? 'active' : ''}`}>
                    {selectedDestination && currentDestination && (
                        <>
                            <button className="close-button" onClick={handleCloseDetails}>X</button>
                            <DestinationDetails
                                name={currentDestination.name}
                                country={currentDestination.country}
                                lowestPrice={currentDestination.lowestPrice}
                                nights={currentDestination.nights}
                                reviews={currentDestination.reviews}
                                images={currentDestination.images}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
