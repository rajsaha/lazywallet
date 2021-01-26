import React, { useState } from 'react';
import ExpenseIcon from '@Components/ExpenseIcon/ExpenseIcon';
import Clear from '@material-ui/icons/Clear';
import './ExpenseHistory.scss';
import { Button, IconButton } from '@material-ui/core';

function ExpenseHistory({ data, removeExpense }) {
    const [confirm, setConfirm] = useState(false);

    return (
        <div className="expense-history-container">
            <div className="details-grid">
                <div className="expense-icon">
                    <ExpenseIcon icon={data.type} />
                </div>

                <div className="amount">
                    {data.amount}
                </div>

                <p className="title">{data.title}</p>
                <IconButton onClick={() => setConfirm(true)}>
                    <Clear />
                </IconButton>

                {
                confirm ? 
                <div className="confirmation-controls-container anim_fadeIn">
                    <div></div>
                    <div className="controls">
                        <Button onClick={() => {
                            removeExpense(data.id);
                            setConfirm(false);
                        }} size="small" variant="outlined" color="primary">Delete</Button>
                        <Button onClick={() => setConfirm(false)} size="small" variant="outlined" color="secondary">Cancel</Button>
                    </div>
                </div> 
                : 
                ""
                }
            </div>
            <div className="date-time">
                <p>{data.datetime}</p>
            </div>
        </div>
    );
}

export default ExpenseHistory;