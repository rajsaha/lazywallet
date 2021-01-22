import React, { useState } from 'react';
import ExpenseIcon from '../ExpenseIcon/ExpenseIcon';
import Button from '@material-ui/core/Button';
import './RegularExpense.scss';
import { Edit, Clear } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';

function RegularExpense({ data, isEditable = false }) {
    const [isLoading, setIsLoading] = useState(false);
    function addExpense() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        console.log("Adding expense");
    }

    function deleteRegularExpense({ expenseData }) {
        console.log("Open dialog", expenseData);
    }

    return (
        isEditable ?
            // Used in Regulars page 
            <div className="regular-expense-container-editable">
                <div className="details-grid">
                    <div className="expense-icon">
                        <ExpenseIcon icon={data.type} />
                    </div>

                    <div className="amount">
                        {data.amount}
                    </div>

                    <p className="title">{data.title}</p>
                </div>

                <div className="controls-grid">
                    <IconButton>
                        <Edit style={{ disabled: isLoading }} />
                    </IconButton>
                    <IconButton onClick={deleteRegularExpense(data)}>
                        <Clear style={{ disabled: isLoading }} />
                    </IconButton>
                </div>
            </div>
            :
            // Used in home page
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