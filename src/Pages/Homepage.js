import React, { useState } from 'react';
import '../index.css';
import LocationCards from './HomeCon/LocationCards';
import Header from './Header';
import MoreDestinotions from './HomeCon/moreDestinotions';
import DestinationDetails from './HomeCon/DestinationDetails';
import StackedCards from "./HomeCon/StackedCards";
import destinationsData from './HomeCon/DestinationsData';

function Home() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [defaultDestination, setDefaultDestination] = useState("ANGKOR WAT SUNRISE");
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
        console.log('setDefaultDestination:', newDestination);
    };

    return (
        <div className='HomeBody'>
            <div className='BackgroudImg'>
                {/* Render default destination images if they exist */}
                {defaultDestinationData && defaultDestinationData.images && (
                    <div className='BackgroudImg'>
                        {defaultDestinationData.images.map((image, index) => (
                            <img key={index} src={image} alt={defaultDestinationData.name} />
                        ))}
                    </div>
                )}
                {/* Conditionally render images for the current destination */}
                {currentDestination && currentDestination.images && (
                    <div className='BackgroudImg'>
                        {currentDestination.images.map((image, index) => (
                            <img key={index} src={image} alt={currentDestination.name} />
                        ))}
                    </div>
                )}
            </div>
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

                        <MoreDestinotions onDestinationChange={handleDefaultChange} />
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
        </div>
    );
}

export default Home;
