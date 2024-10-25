import React from "react";
import Surjections from './Surjections';
import ToDoCards from './ThingsToDoCards';

function ThingsToDoCardsWrapper() {
  const thingsToDoCardsData = [
    { id: 1, option: 1, Row: 'Left' },
    { id: 2, option: 2, Row: 'Right' },
    { id: 3, option: 1, Row: 'Left' },
    { id: 4, option: 2, Row: 'Right' },
    { id: 5, option: 1, Row: 'Left' },  
    { id: 6, option: 2, Row: 'Right' }, 
    { id: 1, option: 2, Row: 'Left' },  
    { id: 2, option: 1, Row: 'Right' }, 
    { id: 3, option: 2, Row: 'Left' },  
    { id: 4, option: 1, Row: 'Right' },
    { id: 5, option: 2, Row: 'Right' },
    { id: 6, option: 1, Row: 'Right' },
  ];

  return (
    <div className="ThingsToDoCards">
      <div className="ThingsToDoCards-topbox">
        <div className="ThingsToDoLine1" />
        <Surjections />
        <div className="ThingsToDoLine2" />
      </div>
      <div className="ThingsToDoCards-contain">
        {thingsToDoCardsData.map((cardData, index) => (
          <ToDoCards
            key={index}
            id={cardData.id}
            option={cardData.option}
            Row={cardData.Row}
          />
        ))}
      </div>
    </div>
  );
}

export default ThingsToDoCardsWrapper;
