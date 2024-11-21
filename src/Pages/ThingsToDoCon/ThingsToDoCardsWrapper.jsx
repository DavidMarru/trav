import React, { useState } from "react";
import Surjections from './Surjections';
import PhoneNav from "../PhoneNav";

import ToDoCards from './ThingsToDoCards';

function ThingsToDoCardsWrapper() {
  // Initial data with 3 reviews for each card
  const thingsToDoCardsData = [
    { id: 1, option: 1, Row: 'Left', category: 'HONEY MOON', reviews: [
      { name: "David Ball", comment: "Stunning plant life. Discover hidden waterfalls, encounter unique animals, and explore the world’s largest tropical rainforest.", stars: 5 },
      { name: "Anna Smith", comment: "A great place to experience the richness of nature.", stars: 4 },
      { name: "John Stevens", comment: "A beautiful destination with breathtaking views. Perfect for a romantic getaway.", stars: 5 }
    ]},
    { id: 2, option: 2, Row: 'Right', category: 'HIKING', reviews: [
      { name: "John Doe", comment: "Incredible views from the top. The hike was challenging but worth it!", stars: 5 },
      { name: "Emily White", comment: "A bit tiring, but I would definitely do it again!", stars: 4 },
      { name: "Mike Ross", comment: "The hike was tough, but the views were unforgettable. Worth every step.", stars: 5 }
    ]},
    { id: 3, option: 1, Row: 'Left', category: 'CAMPING', reviews: [
      { name: "Mark Adams", comment: "Great spot for camping, beautiful surroundings and peaceful atmosphere.", stars: 5 },
      { name: "Sarah Lee", comment: "Amazing experience, perfect for a weekend getaway!", stars: 5 },
      { name: "Rachel Green", comment: "A fantastic camping experience, the surroundings were serene and perfect for a peaceful retreat.", stars: 4 }
    ]},
    { id: 4, option: 2, Row: 'Right', category: 'RELAXING', reviews: [
      { name: "James Harris", comment: "A perfect place to unwind and relax.", stars: 4 },
      { name: "Olivia Green", comment: "Wonderful spa services, very soothing environment.", stars: 5 },
      { name: "Lucas Ford", comment: "Great atmosphere for relaxation. Highly recommend the massages!", stars: 5 }
    ]},
    { id: 5, option: 1, Row: 'Left', category: 'EXPLORING', reviews: [
      { name: "Peter Brown", comment: "Loved exploring new places and discovering hidden gems.", stars: 5 },
      { name: "Sophie Clarke", comment: "So many exciting adventures. Highly recommend!", stars: 4 },
      { name: "Laura Kingsley", comment: "Exploring was a dream! The guides were knowledgeable, and the destinations were beautiful.", stars: 5 }
    ]},
    { id: 6, option: 2, Row: 'Right', category: 'ALL DAY PARTYING', reviews: [
      { name: "Jack Taylor", comment: "Had the time of my life. The parties were insane!", stars: 5 },
      { name: "Emma Miller", comment: "Non-stop fun and excitement. Great way to let loose!", stars: 5 },
      { name: "Chris Evans", comment: "The best party atmosphere I’ve ever experienced. Great music and vibe.", stars: 4 }
    ]},
  ];

  // State for the selected filter category
  const [selectedFilter, setSelectedFilter] = useState("");

  // Filter the cards based on the selected category
  const filteredCards = thingsToDoCardsData.filter((card) => {
    if (selectedFilter === "") return true; // No filter, show all cards
    return card.category === selectedFilter; // Only show cards that match the filter
  });

  return (
    <div className="ThingsToDoCards">
            <PhoneNav />

      <div className="ThingsToDoCards-topbox">
        <div className="ThingsToDoLine1" id="lines" />
        <Surjections selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <div className="ThingsToDoLine2" id="lines" />
      </div>

      <div className="ThingsToDoCards-contain">
        {filteredCards.map((cardData, index) => (
          <ToDoCards
            key={index}
            id={cardData.id}
            option={cardData.option}
            Row={cardData.Row}
            reviews={cardData.reviews} // Pass the reviews data as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default ThingsToDoCardsWrapper;
