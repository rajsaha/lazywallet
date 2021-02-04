import React, {useEffect, useState} from 'react';
import ExpenseIcon from '../ExpenseIcon/ExpenseIcon';
import Button from '@material-ui/core/Button';
import './RegularExpense.scss';
import {Edit, Repeat} from "@material-ui/icons";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {DialogContentText, IconButton} from '@material-ui/core';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddExpense from '../AddExpense/AddExpense';

function RegularExpense({
                            data,
                            isEditable = false,
                            removeRegularExpense,
                            updateRegularExpense
                        }) {
    const [isLoading, setIsLoading] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showUpdateDialog, setShowUpdateDialog] = useState(false);

    useEffect(() => {
        return (() => {
        });
    }, []);

    const handleDeleteDialogClose = () => {
        setShowDeleteDialog(false);
    };

    const handleUpdateDialogClose = () => {
        setShowUpdateDialog(false);
    }

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

    function getDaysRender(days) {
        let max = 7;
        let count = 0;
        let spans = [];
        days.forEach((day, index) => {
            if (day.selected) {
                spans.push(
                    <span key={index}>{day.value}</span>
                )
                count++;
            };
        });
        // Return if all selected
        if (count === max) return <span>Everyday</span>
        
        // Return if some selected
        return spans;
    }

    function convertTimeTo12(time) {
        let [hours, minutes] = time.split(":");
        let amOrPm = hours >= 12 ? 'pm' : 'am';
        hours = (hours % 12) || 12;
        return `${hours}:${minutes} ${amOrPm}`;
    }

    return (
        isEditable ?
            // Used in Regulars page 
            <div className="regular-expense-container-editable">
                <div className="top">
                    <div className="details-grid">
                        <div className="expense-icon">
                            <ExpenseIcon icon={data.typeDesc}/>
                        </div>

                        <div className="amount">
                            {data.amount}
                        </div>

                        <p className="title">{data.title}</p>
                    </div>

                    <div className="controls-grid">
                        <IconButton onClick={() => setShowUpdateDialog(true)}>
                            <Edit style={{disabled: isLoading}}/>
                        </IconButton>
                        <IconButton onClick={() => setShowDeleteDialog(true)}>
                            <DeleteOutlineIcon style={{disabled: isLoading}}/>
                        </IconButton>
                    </div>
                </div>

                {
                    data.repeat && data.days ?
                    <div className="bottom">
                        <div className="repeat-icon">
                            <Repeat />
                        </div>
                        <div className="days">
                            {getDaysRender(data.days)}
                        </div>
                        <div className="time">{convertTimeTo12(data.time)}</div>
                    </div>
                    :
                    ''
                }

                {
                    showDeleteDialog ?
                        <Dialog open={showDeleteDialog} onClose={handleDeleteDialogClose}
                                aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Delete Regular Expense</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Are you sure you want to delete this regular expense?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDeleteDialogClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={() => {
                                    const result = removeRegularExpense(data.id);
                                    if (result) setShowDeleteDialog(false);
                                }} color="primary">
                                    Delete
                                </Button>
                            </DialogActions>
                        </Dialog>
                        :
                        ""
                }

                {
                    showUpdateDialog ?
                        <Dialog open={showUpdateDialog} onClose={handleUpdateDialogClose}
                                aria-labelledby="form-dialog-title" scroll="body">
                            <DialogTitle id="form-dialog-title">Update Expense</DialogTitle>
                            <AddExpense expenseCallback={updateRegularExpense}
                                        dialogCancelCallback={handleUpdateDialogClose}
                                        buttonLabel="update" showButton={false} _id={data.id} _type={data.typeId}
                                        _title={data.title}
                                        _amount={data.amount}
                                        _repeat={data.repeat}
                                        _time={data.time}
                                        _days={data.days}/>
                        </Dialog>
                        :
                        ""
                }
            </div>
            :
            // Used in home page
            <div className="regular-expense-container">
                <div className="expense-icon">
                    <ExpenseIcon icon={data.typeDesc}/>
                </div>

                <p className="title">{data.title}</p>

                <Button size="small" variant="outlined" onClick={addExpense}>{isLoading ? "Adding" : "Add"}</Button>
            </div>
    );
}

export default RegularExpense;