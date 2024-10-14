import Surjections from './Surjections'
import ThingsToDoCardLeft from "./ThingsToDoCardsLeft";
import SmallReview from "./SmallReview";

function ThingsToDoCardsWrapper () {
    return (
    <div className='ThingsToDoCards'>
        <div className='ThingsToDoCards-topbox'>
            <div className="ThingsToDoLine1" />
            <Surjections />
            <div className="ThingsToDoLine2" />
        </div>
            <div className="ThingsToDoCards-contain">
                <div className='ToDoImg'>
                <ThingsToDoCardLeft 
                    className='Left'/>
                <div className="ToDoReview">
                <SmallReview />
                <SmallReview />
                <SmallReview />
                </div>
                </div>
            </div>
    </div>
    );
};

export default ThingsToDoCardsWrapper;