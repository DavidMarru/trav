import ThingsToDoCardLeft from "./ThingsToDoCardsContain";
import SmallReview from "./SmallReview";
import "./ThingsCard.css";


function ToDoCards ({Row}) {
return (
    <div>
    <div className='ToDoImg'>
        </div>
    <div className={`ToDO-Row ${Row}`}>
    <ThingsToDoCardLeft />      
    <div className="ToDoReview">
    <SmallReview />
    <SmallReview />
    <SmallReview />
    </div>
    </div>
</div>
);
};

export default ToDoCards