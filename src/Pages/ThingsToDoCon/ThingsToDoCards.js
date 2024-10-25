import React from "react";
import ThingsToDoCardsContain from "./ThingsToDoCardsContain";
import SmallReview from "./SmallReview";
import "./ThingsCard.css";

function ToDoCards({ Row, id, option }) {
  return (
    <div>
      <div className="ToDoImg" />
      <div className={`ToDO-Row ${Row}`}>
        <ThingsToDoCardsContain id={id} option={option} />
        <div className="ToDoReview">
          <SmallReview />
          <SmallReview />
          <SmallReview />
        </div>
      </div>
    </div>
  );
}

export default ToDoCards;
