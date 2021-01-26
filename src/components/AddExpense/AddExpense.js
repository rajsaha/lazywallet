import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import './AddExpense.scss';

function AddExpense({ expenseCallback, buttonLabel = 'Add Expense', showButton = true, _type = 0, _title = '', _amount = '' }) {
    const [type, setType] = useState(_type ? _type : '');
    const [title, setTitle] = useState(_title ? _title : '');
    const [amount, setAmount] = useState(_amount ? _amount : '');
    const [expenseCallbackReturn, setExpenseCallbackReturn] = useState(false);
    const handleChange = (event) => {
        setType(event.target.value);
    };

    const clearFields = useCallback(() => {
        if (!expenseCallbackReturn) return;
        setType('');
        setTitle('');
        setAmount(0);
    }, [expenseCallbackReturn])

    useEffect(() => {
        console.log(_type, _title, _amount)
        if (expenseCallbackReturn) clearFields();
        return (() => {})
    }, [clearFields, expenseCallbackReturn]);

    return (
        <>
            <form noValidate autoComplete="off">
                <div className={`inputs ${showButton ? 'inputs-template-areas-show-button' : 'inputs-template-areas-hide-button'}`}>
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
                {
                    showButton ?
                    <div className="add-button">
                        <Button variant="outlined" color="primary" onClick={() => {
                            setExpenseCallbackReturn(expenseCallback({ type, title, amount }));
                            clearFields();
                        }}>{ buttonLabel }</Button>
                    </div>
                    :
                    ""
                }
            </form>
        </>
    );
}

export default AddExpense;
