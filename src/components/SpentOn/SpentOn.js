import React from 'react';
import './SpentOn.scss';

function SpentOn({ spentToday , spentThisMonth , spentMostOn }) {
    return (
        <div className="spent-on-container">
            <div className="today">
                <small>Spent Today</small>
                <p>{spentToday}</p>
            </div>

            <div className="month">
                <small>Spent this Month</small>
                <p>{spentThisMonth}</p>
            </div>

            <div className="popular-type">
                <small>Spent most on</small>
                <p>{spentMostOn}</p>
            </div>
        </div>
    );
}

export default SpentOn;
