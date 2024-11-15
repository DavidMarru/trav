import React, { useState } from "react";
import "./DestinationDetails.css";
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
}) => {
  const [showTestPage, setShowTestPage] = useState(false);
  const [mainImage, setMainImage] = useState(null);

  // Function to handle side image click
  const handleSideImageClick = (image) => {
    setMainImage(image); // Set the clicked image
    setShowTestPage(true); // Show TestPage
  };

  const handleClose = () => {
    setShowTestPage(false);
  };

  return (
    <>
      {/* Conditionally render either DestinationDetails or TestPage */}
      {!showTestPage ? (
        <div className="destination-details fade-in">
          <div className="details-prev-img">
            {/* Main Image */}
            <img
              className="mainimg"
              src={images2}
              alt={name}
              onClick={() => handleSideImageClick(images2)}
            />

            {/* Side Images */}
            <div className="sideimg-container">
              <img
                className="sideimg"
                src={images3}
                alt="Landscape 1"
                onClick={() => handleSideImageClick(images3)}
              />
              <img
                className="sideimg"
                src={images4}
                alt="Landscape 2"
                onClick={() => handleSideImageClick(images4)}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="details-info">
            <div className="detailsTop">
              <h2 className="destination-name">{name}</h2>
              <LikeButton />
            </div>
            <p className="country-name">{country}</p>
            <div className="review">
              <div className="reviewStar">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="Stars" src={star} alt="Star rating" />
                ))}
              </div>
              <div className="reviews">{reviews} Reviews</div>
            </div>
            <div className="stayData">
              <div className="stay-info">
                <div className="stay-info-aline">
                  <span className="stay-date">Feb 7th 2024</span>
                  <span className="separator"></span>
                  <span className="stay-nights">nights {nights} </span>
                </div>
              </div>
              <div className="LpriceHolder">
                <p>Lowest price</p>
                <p className="lowest-price">{lowestPrice}</p>
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
            Close
          </button>
          {/* Pass the mainImage and setMainImage to TestPage */}
          <TestPage
            images2={images2}
            images3={images3}
            images4={images4}
            mainImage={mainImage}
            setMainImage={setMainImage}
          />
        </div>
      )}
    </>
  );
};

export default DestinationDetails;
