import React, { useState } from 'react';
import ExpenseIcon from '../ExpenseIcon/ExpenseIcon';
import Button from '@material-ui/core/Button';
import './RegularExpense.scss';

function RegularExpense({ data }) {
    const [isLoading, setIsLoading] = useState(false);
    function addExpense() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        console.log("Adding expense");
    }
    return (
        <div className="regular-expense-container">
            <div className="expense-icon">
                <ExpenseIcon icon={data.type} />
            </div>

            <p className="title">{data.title}</p>

            <Button size="small" variant="outlined" onClick={addExpense}>{isLoading ? "Adding" : "Add"}</Button>
        </div>
    );
}

export default RegularExpense;