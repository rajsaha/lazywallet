import {Button, FormControl, FormControlLabel, FormHelperText, InputLabel, makeStyles, MenuItem, Select, Switch, TextField} from '@material-ui/core';
import React from 'react';
import './AddExpense.scss';
import {Field, FieldArray, useFormik} from 'formik';
import DialogActions from "@material-ui/core/DialogActions";
import {Repeat} from '@material-ui/icons';
import * as Yup from 'yup';

const daysArray = [
    {value: 'mon', selected: false},
    {value: 'tue', selected: false},
    {value: 'wed', selected: false},
    {value: 'thu', selected: false},
    {value: 'fri', selected: false},
    {value: 'sat', selected: false},
    {value: 'sun', selected: false}
];

function AddExpense({
                        expenseCallback,
                        dialogCancelCallback,
                        buttonLabel = 'Add Expense',
                        showButton = true,
                        _id = 0,
                        _type = 0,
                        _title = '',
                        _amount = '',
                        _repeat = false,
                        _time = '12:00'
                    }) {
    const formik = useFormik({
        initialValues: {
            id: _id,
            type: _type,
            title: _title ? _title : '',
            amount: _amount ? _amount : '',
            repeat: _repeat,
            time: _time ? _time : '',
            days: []
        },
        validationSchema: Yup.object({
            type: Yup.number().min(0).required('Required'),
            title: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            amount: Yup.number().required('Required')
        }),
        onSubmit: values => {
            const result = expenseCallback({
                id: _id,
                type: values.type,
                title: values.title,
                amount: values.amount,
                repeat: values.repeat,
                time: values.time
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

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          width: '100%',
          marginTop: 15,
          marginBottom: 15,
        },
    }));

    const classes = useStyles();

    return (
        <>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div
                    className={`inputs ${showButton ? 'inputs-template-areas-show-button' : 'inputs-template-areas-hide-button dialog-content'}`}>
                    <TextField error={!!formik.touched.title && !!formik.errors.title}
                               helperText={(formik.touched.title && formik.errors.title) ? formik.errors.title : ''}
                               type="text" name="title" variant="outlined" placeholder="Title" size="small" label="Title"
                               {...formik.getFieldProps('title')} />
                    <FormControl variant="outlined" size="small" error={!!formik.touched.type && !!formik.errors.type}>
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
                        {(formik.touched.type && formik.errors.type) ?
                            <FormHelperText>Required</FormHelperText> : formik.errors.type}
                    </FormControl>
                    <TextField type="number" error={!!formik.touched.amount && !!formik.errors.amount}
                               helperText={(formik.touched.amount && formik.errors.amount) ? formik.errors.amount : ''}
                               name="amount"
                               variant="outlined" placeholder="Amount"
                               size="small" {...formik.getFieldProps('amount')}
                               label="Amount" />           
                </div>
                {showButton ? '' : 
                    <div className="repeat-switch-container">
                        <div className="repeat-switch">
                            <Repeat className={formik.values.repeat ? 'active-icon-fill' : 'inactive-icon-fill'}/>
                            <p>{formik.values.repeat ? 'Repeating' : 'Repeat'}</p>
                            <FormControlLabel control={<Switch checked={formik.values.repeat} {...formik.getFieldProps('repeat')} name="repeat" color="primary"/>} />
                        </div>

                        {formik.values.repeat ?
                        <div>
                            {/* <FieldArray name="days" render={arrayHelpers => (
                                <div>
                                    {daysArray.map((day, index) => (
                                        <div key={index}>
                                            <Field name={`days.${index}.value`}/>
                                        </div>
                                    ))}
                                </div>
                            )}/> */}
                            <TextField
                            id="time"
                            type="time"
                            variant="outlined"
                            className={classes.textField}
                            placeholder="Time"
                            label="Time"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                            {...formik.getFieldProps('time')}
                            name="time"
                        />
                        </div> : ''}
                    </div>}
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
