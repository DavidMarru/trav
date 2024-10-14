import React from 'react';
import start from "../../img/star-svgrepo-com.svg";
import './SmallReview.css'; // Import the CSS file

const SmallReview = () => {
    return (
        <div className="small-review-container">
            <div className="small-review-header">
                <div className="small-review-header-text">David Ball</div>
            </div>
            <div className="small-review-body">
                <div className="small-review-body-text">
                    “stunning plant life. Discover hidden waterfalls, encounter unique animals, and explore the world’s largest tropical rainforest”
                </div>
                <div className="small-review-stars">
                    <img src={start} alt="star" />
                    <img src={start} alt="star" />
                    <img src={start} alt="star" />
                    <img src={start} alt="star" />
                    <img src={start} alt="star" />
                </div>
            </div>
        </div>
    );
};

export default SmallReview;
