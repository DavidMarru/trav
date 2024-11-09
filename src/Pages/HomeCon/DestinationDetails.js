import React, { useState } from "react";
import "./DestinationDetails.css";
import Img1 from "../../img/Kruger-imgs/Default_Kruger_National_Park_natives_humans_1.jpg";
import Img2 from "../../img/Kruger-imgs/Default_Kruger_National_Park_landscape_2.jpg";
import Img3 from "../../img/Kruger-imgs/Default_Kruger_National_Park_landscape_3.jpg";
import star from "../../img/star-svgrepo-com.svg";
import LikeButton from "../HomeCon/LikeButton";
import TestPage from "../TestPage";

const DestinationDetails = ({
  name,
  country,
  lowestPrice,
  nights,
  reviews,
  images2,
  images3,
  images4,
  images5,
}) => {
  const [showTestPage, setShowTestPage] = useState(false);

  // Function to handle side image click
  const handleSideImageClick = () => {
    setShowTestPage(true);
  };

  const handleClose = () => {
    setShowTestPage(false);
  };

  // Conditionally render either DestinationDetails or TestPage with a fade effect
  return (
    <>
      {!showTestPage ? (
        <div className="destination-details fade-in">
          <div className="details-prev-img">
            <img className="mainimg" src={images2} alt={name} onClick={handleSideImageClick}/>
            <div className="sideimg-container">
              {/* Side Images */}
              <img
                className="sideimg"
                src={images3}
                alt="Kruger National Park landscape 1"
                onClick={handleSideImageClick}
              />
              <img
                className="sideimg"
                src={images4}
                alt="Kruger National Park landscape 2"
                onClick={handleSideImageClick}
              />
            </div>
          </div>
          <div className="details-info">
            <div className="detailsTop">
              <h2 className="destination-name">{name}</h2>
              <LikeButton />
            </div>
            <p className="country-name">{country}</p>
            <div className="review">
              <div className="reviewStar">
                <img className="Stars" src={star} alt="Star rating" />
                <img className="Stars" src={star} alt="Star rating" />
                <img className="Stars" src={star} alt="Star rating" />
                <img className="Stars" src={star} alt="Star rating" />
                <img className="Stars" src={star} alt="Star rating" />
              </div>
              <div className="reviews">{reviews} Reviews</div>
            </div>
            <div className="stayData">
              <div className="stay-info">
                <div className="stay-info-aline">
                  <span className="stay-date">Feb 7, 2024</span>
                  <span className="separator"></span>
                  <span className="stay-nights">{nights} nights</span>
                </div>
              </div>
              <div className="LpriceHolder">
                <h3>Lowest price</h3>
                <h3 className="lowest-price">{lowestPrice}</h3>
              </div>
            </div>
            <div className="amenities">
              All-Inclusive Stays | Adventure Packages |{" "}
              <strong>Honeymoon Packages</strong> | And More
            </div>
            <div className="book-button">Book Your Stay</div>
          </div>
        </div>
      ) : (
        <div className="fade-in">
          <button className="closeButton" onClick={handleClose}>
            close
          </button>
          <TestPage
            images2={images2}
            images3={images3}
            images4={images4}
            images5={images5}
          />
        </div>
      )}
    </>
  );
};

export default DestinationDetails;
