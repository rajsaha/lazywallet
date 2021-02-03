import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    Switch,
    TextField
} from '@material-ui/core';
import React from 'react';
import './AddExpense.scss';
import {FieldArray, Formik} from 'formik';
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
                        _time = '12:00',
                        _days = daysArray
                    }) {

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
            <Formik initialValues={{
                id: _id,
                type: _type,
                title: _title,
                amount: _amount,
                repeat: _repeat,
                time: _time.length === 0 ? '12:00' : _time,
                days: _days
            }} validationSchema={Yup.object({
                type: Yup.number().min(0).required('Required'),
                title: Yup.string().trim().max(15, 'Must be 15 characters or less').required('Required'),
                amount: Yup.number().required('Required'),
                repeat: Yup.boolean().required(),
                days: Yup.array().when('repeat', {
                    is: true,
                    then: Yup.array().test('days-check', 'Please select a day', (days) => {
                        let count = 0;
                        days.forEach(day => {
                            if (day.selected) count++;
                        });

                        if (count === 0) return false;
                        return true;
                    })
                })
            })} onSubmit={(values, {resetForm}) => {
                const result = expenseCallback({
                    id: _id,
                    type: values.type,
                    title: values.title,
                    amount: values.amount,
                    repeat: values.repeat,
                    time: values.time,
                    days: values.days
                });

                // If operation successful, reset form
                if (result) {
                    resetForm({type: -1, title: '', amount: '', repeat: false, days: daysArray});
                    if (!showButton) dialogCancelCallback();
                    return true;
                }

                return false;
            }}>
                {formik => (
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <div
                            className={`inputs ${showButton ? 'inputs-template-areas-show-button' : 'inputs-template-areas-hide-button dialog-content'}`}>
                            <TextField error={!!formik.touched.title && !!formik.errors.title}
                                       helperText={(formik.touched.title && formik.errors.title) ? formik.errors.title : ''}
                                       type="text" name="title" variant="outlined" placeholder="Title" size="small"
                                       label="Title"
                                       {...formik.getFieldProps('title')} />
                            <FormControl variant="outlined" size="small"
                                         error={!!formik.touched.type && !!formik.errors.type}>
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
                                       label="Amount"/>
                        </div>
                        {showButton ? '' :
                            <div className="repeat-switch-container">
                                <div className="repeat-switch">
                                    <Repeat
                                        className={formik.values.repeat ? 'active-icon-fill' : 'inactive-icon-fill'}/>
                                    <p>{formik.values.repeat ? 'Repeating' : 'Repeat'}</p>
                                    <FormControlLabel
                                        control={<Switch
                                            checked={formik.values.repeat} {...formik.getFieldProps('repeat')}
                                            name="repeat" color="primary"/>}/>
                                </div>

                                {formik.values.repeat ?
                                    <div>
                                        <div className="days">
                                            <FieldArray name="days" render={arrayHelpers => (
                                                formik.values.days.map((day, index) => {
                                                    return (
                                                        <label
                                                            key={index}
                                                            className={`custom-checkbox ${day.selected ? 'active-checkbox' : 'inactive-checkbox'}`}
                                                            onClick={() => arrayHelpers.replace(index, {
                                                                value: day.value,
                                                                selected: !day.selected
                                                            })}>{day.value}
                                                            <input
                                                                type="checkbox" {...formik.getFieldProps(`days[${index}]`)}
                                                                name={`day[${index}]`}/>
                                                        </label>
                                                    );
                                                })
                                            )}/>
                                        </div>
                                        <div className="custom-error">
                                            <span>{typeof formik.errors.days === 'string' ? formik.errors.days : ''}</span>
                                        </div>
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
                )}
            </Formik>
        </>
    );
}

export default AddExpense;
