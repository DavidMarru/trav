import React from "react";
import ThingsToDoCardsContain from "./ThingsToDoCardsContain";
import SmallReview from "./SmallReview";
import "./ThingsCard.css";

function ToDoCards({ Row, id, option, reviews }) {
  return (
    <div>
      <div className="ToDoImg" />
      <div className={`ToDO-Row ${Row}`}>
        <ThingsToDoCardsContain id={id} option={option} />
        <div className="ToDoReview">
          {reviews.map((review, index) => (
            <SmallReview
              key={index}
              name={review.name}
              comment={review.comment}
              stars={review.stars}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoCards;
