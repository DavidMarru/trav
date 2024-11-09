import React, { useState } from "react";
import Header from "./Header";
import "./TestPage.css";
import Footer from "../Pages/Footer";
import "./ThingsToDoCon/ThingsToDo.css";

function TestPage({ images2, images3, images4 }) {
  // Initialize state for the main image with the first available image
  const [mainImage, setMainImage] = useState(images2 || '');

  // Array of preview images
  const previewImages = [images2, images3, images4].filter(Boolean);

  // Function to handle click on a preview image
  const handlePreviewClick = (image) => {
    setMainImage(image);
  };

  const handleClose = () => {
    setMainImage(null);
  };

  return (
    <>
      <div className="imageview">
        {/* Overlay for the blurred background effect */}
        <div className="overlay" />

        {/* Preview Images */}
        <div className="previewimgs">
          {previewImages.map((img, index) => (
            <img
              key={index}
              className={`preview${index + 1}`}
              alt={`preview ${index + 1}`}
              src={img}
              onClick={() => handlePreviewClick(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        {mainImage && (
          <div className="mainImageWrapper">
            <img className="mainimagecontainer" alt="main" src={mainImage} />
          </div>
        )}
      </div>
    </>
  );
}

export default TestPage;
