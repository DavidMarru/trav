// src/ThingsToDoCon/components/Reveiw.js

import React from 'react';

export const Reveiw = ({ className, img, star, star1, star2, star3 }) => {
    return (
        <div className={`reveiw ${className}`}>
            <img className="star-icon" src={img} alt="Star Rating" />
            <img className="star-icon" src={star} alt="Star Rating" />
            <img className="star-icon" src={star1} alt="Star Rating" />
            <img className="star-icon" src={star2} alt="Star Rating" />
            <img className="star-icon" src={star3} alt="Star Rating" />
        </div>
    );
};
