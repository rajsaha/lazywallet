import React, { useEffect, useState } from 'react';
import ExpenseIcon from '../ExpenseIcon/ExpenseIcon';
import Button from '@material-ui/core/Button';
import './RegularExpense.scss';
import { Edit, Clear } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";

function RegularExpense({ data, isEditable = false }) {
    const [isLoading, setIsLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        return (() => { });
    }, []);

    function addExpense() {
        setIsLoading(true);
        dummyDataObj.addExpense({
            type: data.type,
            title: data.title,
            amount: data.amount
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        console.log("Adding expense");
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
                    <IconButton onClick={() => setConfirm(true)}>
                        <Clear style={{ disabled: isLoading }} />
                    </IconButton>
                </div>

                {
                    confirm ?
                        <div className="confirmation-controls-container anim_fadeIn">
                            <div></div>
                            <div className="controls">
                                <Button size="small" variant="outlined" color="primary">Delete</Button>
                                <Button onClick={() => setConfirm(false)} size="small" variant="outlined" color="secondary">Cancel</Button>
                            </div>
                        </div>
                        :
                        ""
                }
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