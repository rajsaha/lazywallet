import React, { Component } from 'react';
import ExpenseIcon from '../ExpenseIcon/ExpenseIcon';
import Clear from '@material-ui/icons/Clear';
import './ExpenseHistory.scss';
import { IconButton } from '@material-ui/core';

export class ExpenseHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false };
        this.removeExpense = this.removeExpense.bind(this);
    }
    render() {
        return (
            <div className="expense-history-container">
                <div className="date-time">
                    <span>{this.props.data.datetime}</span>
                </div>
                <div className="details-grid">
                    <div className="expense-icon">
                        <ExpenseIcon icon={this.props.data.type} />
                    </div>

                    <div className="amount">
                        {this.props.data.amount}
                    </div>

                    <p className="title">{this.props.data.title}</p>
                    <IconButton>
                        <Clear onClick={this.removeExpense} />
                    </IconButton>
                </div>
            </div>
        );
    }

    removeExpense() {
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000);
        console.log("Removing expense");
    }
}