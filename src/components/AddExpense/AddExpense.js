import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './AddExpense.scss';

function AddExpense() {
    const [type, setType] = useState('');
    const [amount, setAmount] = useState(0);
    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <>
            <form noValidate autoComplete="off">
                <div className="inputs">
                    <TextField
                        select
                        variant="outlined"
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
                    <TextField variant="outlined" value={amount} onChange={(e) => {setAmount(e.target.value)}} />
                </div>
                <div className="add-button">
                    <Button variant="outlined" color="primary">Add Expense</Button>
                </div>
            </form>
        </>
    );
}

export default AddExpense;
