import {Button} from '@material-ui/core';
import React from 'react';
import './AddRegularExpense.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddExpense from '../AddExpense/AddExpense';

function AddRegularExpense({addRegularExpenseCallback, handleClose, handleOpen, showDialog = false}) {
    return (
        <>
            {showDialog ?
                <Dialog open={showDialog} onClose={handleClose} scroll="body" aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Regular Expense</DialogTitle>
                    <AddExpense expenseCallback={addRegularExpenseCallback} dialogCancelCallback={handleClose}
                                showButton={false}/>
                </Dialog>
                :
                ""
            }
            <div className="add-button">
                <Button variant="outlined" color="primary" onClick={handleOpen}>Add Regular
                    Expense</Button>
            </div>
        </>
    );
}

export default AddRegularExpense;