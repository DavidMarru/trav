// DestinationList.js
import React from 'react';

function DestinationList({ destinations, onCountryClick }) {
    return (
        <div className="destinations">
            <ul>
                {destinations.map((destination, index) => (
                    <li 
                        key={index} // Use index as a unique key, or better a unique identifier if available
                        className={destination.toLowerCase().replace(/\s+/g, '')}
                        onClick={() => onCountryClick(destination)} // Call with the correct variable
                    >
                        {destination} {/* Display the correct destination */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DestinationList;
