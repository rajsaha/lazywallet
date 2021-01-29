import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './AddRegularExpense.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddExpense from '../AddExpense/AddExpense';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";

function AddRegularExpense() {
    const [showDialog, setShowDialog] = useState(false);
    const handleClose = () => {
        setShowDialog(false);
    };

    function addNewRegularExpense({ type, title, amount }) {
        if (!title || !amount) {
            return false;
        }

        console.log(type, title, amount)

        dummyDataObj.addRegularExpense({
            type: type,
            title: title,
            amount: amount
        });

        return true;
    }

    return (
        <>
            { showDialog ?
                <Dialog open={showDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Regular Expense</DialogTitle>
                    <DialogContent>
                        <AddExpense expenseCallback={addNewRegularExpense} showButton={false} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
                :
                ""
            }
            <div className="add-button">
                <Button variant="outlined" color="primary" onClick={() => setShowDialog(true)}>Add Regular Expense</Button>
            </div>
        </>
    );
}

export default AddRegularExpense;