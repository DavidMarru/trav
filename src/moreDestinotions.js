import React, { useState } from 'react';
import rightArrow from './img/right-arrow-svgrepo-com.png';
import rightArrow2 from './img/right-arrow-svgrepo-comy.png';
import DestinationList from './DestinationList';

const countryDefaultDestinations = {
    'South Africa': 'KRUGER NATIONAL PARK',
    'Cambodia': 'ANGKOR WAT SUNRISE',
    'Brazil': 'AMAZON RAINFOREST',
    'Japan': 'KANSAI REGION',
    'Switzerland': 'Zermatt & Matterhorn',
    // Add other countries and their default destinations
};

const countryDestinations = {
    Africa: ['South Africa','Algeria', 'Egypt', 'Ghana', 'Kenya', 'Morocco', 'Nigeria', 'Tanzania', 'Uganda', 'Zimbabwe'],
    Asia: ['Cambodia', 'Japan','China', 'India', 'Malaysia', 'Pakistan', 'Saudi Arabia', 'South Korea', 'Thailand', 'Vietnam'],
    AustraliaOceania: ['Australia', 'Fiji', 'New Zealand', 'Papua New Guinea', 'Samoa', 'Tonga', 'Vanuatu'],
    Europe: ['France', 'Germany', 'Italy', 'Netherlands', 'Norway', 'Russia', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom'],
    SouthAmerica: ['Brazil','Argentina', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela']
};

function MoreDestinotions({ onDestinationChange }) {
    const [mClicked, setMClicked] = useState(false);
    const [CountryClicked, setCountryClicked] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleClick = () => {
        if (!CountryClicked) { 
            setMClicked(true); 
        }
    };

    const handleRegionClicked = (region) => {
        setSelectedRegion(region);
        console.log('Region clicked:', region); 
        setCountryClicked(true);
        setMClicked(false); 
    };

    const handleCountryDestinations = (country) => {
        const defaultDestination = countryDefaultDestinations[country];
        console.log('Country selected:', country, 'Default destination:', defaultDestination);
        onDestinationChange(defaultDestination);
        // You can add additional logic here, like setting state for a selected country or navigating
    };

    const handleMouseLeave = () => {
        setMClicked(false); 
        setCountryClicked(false); 
        setSelectedRegion('');
    }

    return (
        <div className={`mbuttonA ${CountryClicked ? 'CountryClicked' : mClicked ? 'mClicked' : ''}`}
            onMouseLeave={handleMouseLeave}
        >
            <div className="moreButton" onClick={handleClick}>
                <h3 className="moreDestinotions">MORE<br />DESTINOTIONS</h3>
                <div className="countries">
                    <p className={`Africa ${selectedRegion === 'Africa' ? 'CountryClicked' : ''}`} onClick={() => handleRegionClicked('Africa')}>Africa</p>
                    <p className={`Asia ${selectedRegion === 'Asia' ? 'CountryClicked' : ''}`} onClick={() => handleRegionClicked('Asia')}>Asia</p>
                    <p className={`AustraliaOceania ${selectedRegion === 'AustraliaOceania' ? 'CountryClicked' : ''}`} onClick={() => handleRegionClicked('AustraliaOceania')}>Australia/Oceania</p>
                    <p className={`Europe ${selectedRegion === 'Europe' ? 'CountryClicked' : ''}`} onClick={() => handleRegionClicked('Europe')}>Europe</p>
                    <p className={`SouthAmerica ${selectedRegion === 'SouthAmerica' ? 'CountryClicked' : ''}`} onClick={() => handleRegionClicked('SouthAmerica')}>South America</p>
                </div>
                {selectedRegion && (
                    <div className="DestinationList">
                        <DestinationList 
                            destinations={countryDestinations[selectedRegion]} 
                            onCountryClick={handleCountryDestinations} // Pass handle function
                        />
                    </div>
                )}
            </div>
            <div className="arrowWrapper">
                <img src={rightArrow} alt="Right Arrow" className="arrow1" />
                <img src={rightArrow2} alt="Right Arrow 2" className="arrow2" />
            </div>
        </div>
    );
}

export default MoreDestinotions;
