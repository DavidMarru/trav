// src/ThingsToDoCon/components/ReveiwBlock.js

import React from 'react';

export const ReveiwBlock = ({ reveiwImg, reveiwStar, reveiwStar1, reveiwStar2, reveiwStar3, ...props }) => {
    return (
        <div className="reveiw-block">
            <img className="star-icon" src={reveiwImg} alt="Star" />
            <img className="star-icon" src={reveiwStar} alt="Star" />
            <img className="star-icon" src={reveiwStar1} alt="Star" />
            <img className="star-icon" src={reveiwStar2} alt="Star" />
            <img className="star-icon" src={reveiwStar3} alt="Star" />
            {/* Add more stars or any extra props you need */}
        </div>
    );
};
