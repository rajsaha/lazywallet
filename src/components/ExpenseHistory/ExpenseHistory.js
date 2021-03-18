import React, { useState } from "react";
import ExpenseIcon from "@Components/ExpenseIcon/ExpenseIcon";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "./ExpenseHistory.scss";
import { Button, DialogContentText, IconButton } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function ExpenseHistory({ data, removeExpense }) {
  const [showDialog, setShowDialog] = useState(false);

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="expense-history-container">
      <div className="details-grid">
        <div className="expense-icon">
          <ExpenseIcon icon={data.typeDesc} />
        </div>

        <div className="amount">{data.amount}</div>

        <p className="title">{data.title}</p>
        <IconButton onClick={() => setShowDialog(true)}>
          <DeleteOutlineIcon />
        </IconButton>

        {showDialog ? (
          <Dialog
            open={showDialog}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Delete Expense</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this expense?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  removeExpense(data._id);
                  handleClose();
                }}
                color="primary"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        ) : (
          ""
        )}
      </div>
      <div className="date-time">
        <p>{data.timestamp}</p>
      </div>
    </div>
  );
}

export default ExpenseHistory;
