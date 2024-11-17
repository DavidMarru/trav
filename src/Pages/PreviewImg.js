import React from "react";
import "./PreviewImg.css";

function PreviewImg({ images2, images3, images4, mainImage, setMainImage }) {
  // Array of preview images
  const previewImages = [images2, images3, images4].filter(Boolean);

  // Function to handle click on a preview image
  const handlePreviewClick = (image) => {
    setMainImage(image); // Update the mainImage using the passed setMainImage function
  };

  const handleClose = () => {
    setMainImage(null);
  };

  return (
      <div className="imageview">
        {/* Overlay for the blurred background effect */}
          {/* Main Image */}
          {mainImage && (
              <img className="mainimagecontainer" alt="main" src={mainImage} />
          )}

        {/* Preview Images */}
        <div className="previewimgs">
          {previewImages.map((img, index) => (
            <img
              key={index}
              className="preview"
              alt={`preview ${index + 1}`}
              src={img}
              onClick={() => handlePreviewClick(img)}
            />
          ))}
        </div>
        
        <div className="overlay" />
      </div>
  );
}

export default PreviewImg;
