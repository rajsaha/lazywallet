import { Button, InputLabel, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import './AddExpense.scss';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export default function AddExpense() {
    const classes = useStyles();
    const [type, setType] = React.useState('');
    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <div>
            <form noValidate>
                <div className="inputs">
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={type}
                            label="Type"
                            onChange={handleChange}
                            displayEmpty
                        >
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
                    </FormControl>
                    <TextField variant="outlined" />
                </div>
                <div className="add-button">
                    <Button variant="contained" color="primary">Add</Button>
                </div>
            </form>
        </div>
    );
}
