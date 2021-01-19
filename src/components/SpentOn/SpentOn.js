import React from 'react';
import './SpentOn.scss';

function SpentOn() {
    return (
        <div className="spent-on-container">
            <div className="today">
                <small>Spent Today</small>
                <p>123</p>
            </div>

            <div className="month">
                <small>Spent this Month</small>
                <p>1000</p>
            </div>

            <div className="popular-type">
                <small>Spent most on</small>
                <p>Food</p>
            </div>
        </div>
    );
}

export default SpentOn;