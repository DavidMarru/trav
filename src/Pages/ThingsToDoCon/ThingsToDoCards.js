// src/ThingsToDoCon/components/ThingsToDoCards.js

import React from 'react';
import './ThingsToDo.css'; // Assuming you'll style this separately

export const ThingsToDoCards = ({ className, defaultKruger, frameClassName }) => {
    return (
        <div className={`things-to-do-cards ${className}`}>
            <div className={`frame ${frameClassName}`}>
                <img src={defaultKruger} alt="Things to do" className="things-to-do-img" />
            </div>
        </div>
    );
};
