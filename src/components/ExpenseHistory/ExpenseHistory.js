import React, { useEffect, useState } from 'react';
import ExpenseIcon from '../ExpenseIcon/ExpenseIcon';
import Clear from '@material-ui/icons/Clear';
import './ExpenseHistory.scss';
import { IconButton } from '@material-ui/core';

function ExpenseHistory({ data }) {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        return (() => {
            console.log('component unloading');
        });
    }, []);

    function removeExpense() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        console.log("Removing expense");
    }

    return (
        <div className="expense-history-container">
            <div className="date-time">
                <span>{data.datetime}</span>
            </div>
            <div className="details-grid">
                <div className="expense-icon">
                    <ExpenseIcon icon={data.type} />
                </div>

                <div className="amount">
                    {data.amount}
                </div>

                <p className="title">{data.title}</p>
                <IconButton onClick={removeExpense}>
                    <Clear style={{ disabled: isLoading }}/>
                </IconButton>
            </div>
        </div>
    );
}

export default ExpenseHistory;