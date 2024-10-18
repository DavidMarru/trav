import Surjections from './Surjections'
import ToDoCards from './ThingsToDoCards'

function ThingsToDoCardsWrapper () {
    
    return (
    <div className='ThingsToDoCards'>
        <div className='ThingsToDoCards-topbox'>
            <div className="ThingsToDoLine1" />
            <Surjections />
            <div className="ThingsToDoLine2" />
        </div>
        <div className="ThingsToDoCards-contain">
           <ToDoCards 
           Row={'Left'}
           />
           <ToDoCards 
           Row={'Right'}
           />
           <ToDoCards 
           Row={'Left'}
           />
           <ToDoCards 
           Row={'Right'}
           />
        </div>
    </div>
    );
};

export default ThingsToDoCardsWrapper;