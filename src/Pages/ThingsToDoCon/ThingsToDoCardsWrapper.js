import Surjections from './Surjections'
import ThingsToDoCardLeft from "./ThingsToDoCardsLeft";

function ThingsToDoCardsWrapper () {
    return (
    <div className='ThingsToDoCards'>
        <div className='ThingsToDoCards-topbox'>
            <div className="ThingsToDoLine1" />
            <Surjections />
            <div className="ThingsToDoLine2" />
        </div>
            <div className="ThingsToDoCards-contain">
                <ThingsToDoCardLeft />
            </div>
    </div>
    );
};

export default ThingsToDoCardsWrapper;