import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './AddExpense.scss';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";

function AddExpense() {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const handleChange = (event) => {
        setType(event.target.value);
    };

    function addNewExpense() {
        dummyDataObj.addExpense({
            type: type,
            title: title,
            amount: amount
        });
    }

    return (
        <>
            <form noValidate autoComplete="off">
                <div className="inputs">
                    <TextField variant="outlined" placeholder="Title" size="small" value={title} onChange={(e) => {setTitle(e.target.value)}} />
                    <TextField
                        select
                        variant="outlined"
                        size="small"
                        label="Type"
                        value={type}
                        onChange={handleChange}>
                        <MenuItem value={0}>Food</MenuItem>
                        <MenuItem value={1}>Gift</MenuItem>
                        <MenuItem value={2}>Medical</MenuItem>
                        <MenuItem value={3}>Home</MenuItem>
                        <MenuItem value={4}>Transportation</MenuItem>
                        <MenuItem value={5}>Personal</MenuItem>
                        <MenuItem value={6}>Pets</MenuItem>
                        <MenuItem value={7}>Utilities</MenuItem>
                        <MenuItem value={8}>Travel</MenuItem>
                        <MenuItem value={9}>Debt</MenuItem>
                        <MenuItem value={10}>Other</MenuItem>
                    </TextField>
                    <TextField variant="outlined" placeholder="Amount" size="small" value={amount} onChange={(e) => {setAmount(e.target.value)}} />
                </div>
                <div className="add-button">
                    <Button variant="outlined" color="primary" onClick={addNewExpense}>Add Expense</Button>
                </div>
            </form>
        </>
    );
}

export default AddExpense;
