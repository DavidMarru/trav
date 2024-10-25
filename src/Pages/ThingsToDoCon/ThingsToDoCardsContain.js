import React from "react";
import FullButton from "../../FullButton";
import defaultKrugerNationalParkLandscape2 from "../../img/Default_Kruger_National_Park_landscape_0.jpg";
import amazon_Rainforest from "../../img/Default_brazil_inside_amazon_Rainforest_3.jpg";
import "./ThingsCard.css";
import destinationsData from '../HomeCon/DestinationsData';

const ThingsToDoCardLeft = ({ className, id, option }) => {
  // Find the destination with the matching ID
  const destination = destinationsData.find(dest => dest.id === id);

  // If no destination is found, display an error message
  if (!destination) {
    return <div>No destination found for the provided ID.</div>;
  }

  // Find the specific activity in ThingsToDo based on the option provided
  const activity = destination.ThingsToDo?.find(item => item.option === option);

  // If no activity is found, display an error message
  if (!activity) {
    return <div>No activity found for the provided option.</div>;
  }

  return (
    <div className={`things-to-do-cards ${className}`}>
      <div className="overLayer"/>
        <div className="ToDoBg-Img-cont">
          <img src={destination.images[0]} alt={destination.name} />
        </div>
        <div className="location-img">
          <img
            className="default-kruger"
            alt="Destination Image"
            src={defaultKrugerNationalParkLandscape2}
          />
        </div>
        <div className="location-text">
          <p className="text-wrapper">
            {activity.details}
          </p>
          <FullButton ButtonText="Book Your Stay" />
        </div>
        <div className="location">
          <div className="text-wrapper-2">{activity.title}</div>
          <div className="text-wrapper-3">{destination.name}</div>
        </div>
    </div>
  );
};

export default ThingsToDoCardLeft;
