import React from "react";
import FullButton from "../../FullButton";
import defaultKrugerNationalParkLandscape2 from "../../img/Default_Kruger_National_Park_landscape_0.jpg";
import amazon_Rainforest from "../../img/Default_brazil_inside_amazon_Rainforest_3.jpg";
import "./ThingsCard.css";

const ThingsToDoCardLeft = ({ className }) => {
  return (
    <div className={`things-to-do-cards ${className}`}>
      <div className="overLayer"/>
        <div className="ToDoBg-Img-cont">
          <img src={amazon_Rainforest} alt="" />
        </div>
          <div className="location-img">
            <img
              className="default-kruger"
              alt="Default kruger"
              src={defaultKrugerNationalParkLandscape2}
            />
          </div>
          <div className="location-text">
            <p className="text-wrapper">
              A hike through the **Amazon Rainforest** offers a thrilling
              adventure through dense jungle, vibrant wildlife, and stunning
              plant life. Discover hidden waterfalls, encounter unique animals,
              and explore the world’s largest tropical rainforest, with guided
              tours revealing its fascinating ecosystems and indigenous
              cultures.
            </p>
            <FullButton ButtonText="Book You Stay" />
          </div>
        <div className="location">
          <div className="text-wrapper-2">Walk among giants</div>
          <div className="text-wrapper-3">AMAZON RAINFOREST</div>
        </div>
    </div>
  );
};
export default ThingsToDoCardLeft;
