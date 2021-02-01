import {Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import React from 'react';
import './AddExpense.scss';
import {useFormik} from 'formik';
import DialogActions from "@material-ui/core/DialogActions";

const validate = values => {
    const errors = {};
    if (values.type < 0) {
        errors.type = 'Required';
    }

    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 20) {
        errors.title = 'Must be 20 characters or less';
    }

    if (!values.amount) {
        errors.amount = 'Required';
    }

    return errors;
};

function AddExpense({
                        expenseCallback,
                        dialogCancelCallback,
                        buttonLabel = 'Add Expense',
                        showButton = true,
                        _id = 0,
                        _type = 0,
                        _title = '',
                        _amount = ''
                    }) {
    const formik = useFormik({
        initialValues: {
            id: _id,
            type: _type,
            title: _title ? _title : '',
            amount: _amount ? _amount : '',
        },
        validate,
        onSubmit: values => {
            const result = expenseCallback({
                id: _id,
                type: values.type,
                title: values.title,
                amount: values.amount
            });

            // If operation successful, reset form
            if (result) {
                formik.handleReset({type: -1, title: '', amount: ''});
                if (!showButton) dialogCancelCallback();
                return true;
            }

            return false;
        },
    });

    return (
        <>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div
                    className={`inputs ${showButton ? 'inputs-template-areas-show-button' : 'inputs-template-areas-hide-button dialog-content'}`}>
                    <TextField error={!!formik.errors.title} helperText={formik.errors.title ? formik.errors.title : ''}
                               type="text" name="title" variant="outlined" placeholder="Title" size="small"
                               {...formik.getFieldProps('title')} />
                    <FormControl variant="outlined" size="small" error={!!formik.errors.type}>
                        <InputLabel>Type</InputLabel>
                        <Select name="type" label="Type" {...formik.getFieldProps('type')}>
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
                        </Select>
                        {formik.errors.type ? <FormHelperText>Required</FormHelperText> : formik.errors.type}
                    </FormControl>
                    <TextField error={!!formik.errors.amount}
                               helperText={formik.errors.amount ? formik.errors.amount : ''} name="amount"
                               variant="outlined" placeholder="Amount"
                               size="small" {...formik.getFieldProps('amount')} />
                </div>
                {
                    showButton ?
                        <div className="add-button">
                            <Button type="submit" variant="outlined" color="primary">{buttonLabel}</Button>
                        </div>
                        :
                        <DialogActions>
                            <Button color="primary" onClick={dialogCancelCallback}>
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                {buttonLabel}
                            </Button>
                        </DialogActions>
                }
            </form>
        </>
    );
}

export default AddExpense;
