import React from 'react';
import LocationCards from './LocationCards'; // Ensure this path is correct
import './stackedCards.css'; // Import your CSS file here

const StackedCards = ({ selectedRegion }) => {
  // Example list of locations; replace this with your actual data source
  const locations = [
    { id: 1, name: 'Angkor Wat Sunrise', Country: 'Cambodia' },
    { id: 6, name: 'Angkor Wat Sunrise', Country: 'Cambodia' },
    { id: 7, name: 'Angkor Wat Sunrise', Country: 'Cambodia' },
    { id: 2, name: 'Kruger National Park', Country: 'South Africa' },
    { id: 3, name: 'Taj Mahal', Country: 'India' },
    { id: 4, name: 'Great Wall', Country: 'China' },
    { id: 5, name: 'Machu Picchu', Country: 'Peru' },
  ];

  // Filter locations based on the selected Country
  const filteredLocations = locations.filter(location => location.Country === selectedRegion);

  console.log('Filtered locations:', filteredLocations);

  return (
    <div className="stacked-cards-container">
      {filteredLocations.map((location, index) => (
        <div
          key={location.id}
          className={`stacked-card ${
            index === 1 ? 'middle-card' : index === 0 ? 'left-card' : 'right-card'
          }`}
        >
          <LocationCards
            destination={location.name}
          />
          {/* Remove or replace the img tag with a valid image source */}
          <h3 className="destination">{location.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
