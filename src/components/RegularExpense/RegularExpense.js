import React, { Component } from 'react';
import ExpenseIcon from '../ExpenseIcon/ExpenseIcon';
import Button from '@material-ui/core/Button';
import './RegularExpense.scss';

export class RegularExpense extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false };
        this.addExpense = this.addExpense.bind(this);
    }
    render() {
        return (
            <div className="regular-expense-container">
                <div className="expense-icon">
                    <ExpenseIcon icon={this.props.data.type} />
                </div>

                <p className="title">{this.props.data.title}</p>

                <Button size="small" variant="outlined" onClick={this.addExpense}>{this.state.isLoading ? "Adding" : "Add"}</Button>
            </div>
        );
    }

    addExpense() {
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000);
        console.log("Adding expense");
    }
}