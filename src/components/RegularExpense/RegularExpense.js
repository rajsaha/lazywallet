import React, { useEffect, useState } from 'react';
import ExpenseIcon from '../ExpenseIcon/ExpenseIcon';
import Button from '@material-ui/core/Button';
import './RegularExpense.scss';
import { Edit, Clear } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddExpense from '../AddExpense/AddExpense';

function RegularExpense({ data, isEditable = false }) {
    const [isLoading, setIsLoading] = useState(false);
    const [showDeleteConfirmationButtons, setShowDeleteConfirmationButtons] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        return (() => { });
    }, []);

    const handleClose = () => {
        setShowDialog(false);
    };

    function addExpense() {
        setIsLoading(true);
        dummyDataObj.addExpense({
            typeId: data.type,
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
                        <ExpenseIcon icon={data.typeDesc} />
                    </div>

                    <div className="amount">
                        {data.amount}
                    </div>

                    <p className="title">{data.title}</p>
                </div>

                <div className="controls-grid">
                    <IconButton onClick={() => setShowDialog(true)}>
                        <Edit style={{ disabled: isLoading }} />
                    </IconButton>
                    <IconButton onClick={() => setShowDeleteConfirmationButtons(true)}>
                        <Clear style={{ disabled: isLoading }} />
                    </IconButton>
                </div>

                {
                    showDeleteConfirmationButtons ?
                        <div className="confirmation-controls-container anim_fadeIn">
                            <div></div>
                            <div className="controls">
                                <Button size="small" variant="outlined" color="primary">Delete</Button>
                                <Button onClick={() => setShowDeleteConfirmationButtons(false)} size="small" variant="outlined" color="secondary">Cancel</Button>
                            </div>
                        </div>
                        :
                        ""
                }

                {
                    showDialog ?
                        <Dialog open={showDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Update Expense</DialogTitle>
                            <DialogContent>
                                <AddExpense buttonLabel="update" showButton={false} _type={data.typeId} _title={data.title} _amount={data.amount} />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleClose} color="primary">
                                    Update
                                </Button>
                            </DialogActions>
                        </Dialog>
                        :
                        ""
                }
            </div>
            :
            // Used in home page
            <div className="regular-expense-container">
                <div className="expense-icon">
                    <ExpenseIcon icon={data.typeDesc} />
                </div>

                <p className="title">{data.title}</p>

                <Button size="small" variant="outlined" onClick={addExpense}>{isLoading ? "Adding" : "Add"}</Button>
            </div>
    );
}

export default RegularExpense;