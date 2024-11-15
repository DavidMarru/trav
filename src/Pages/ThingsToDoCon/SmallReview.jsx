import React from 'react';
import start from "../../img/star-svgrepo-com.svg";
import './SmallReview.css'; // Import the CSS file

// Accepting props for name, comment, and stars
const SmallReview = ({ name, comment, stars }) => {
    // Create an array with the correct number of stars
    const starArray = Array.from({ length: stars }, (_, index) => (
        <img key={index} src={start} alt="star" />
    ));

    return (
        <div className="small-review-container">
            <div className="small-review-header">
                <div className="small-review-header-text">{name}</div>
            </div>
            <div className="small-review-body">
                <div className="small-review-body-text">
                    “{comment}”
                </div>
                <div className="small-review-stars">
                    {starArray} {/* Render stars based on the value of 'stars' */}
                </div>
            </div>
        </div>
    );
};

export default SmallReview;
