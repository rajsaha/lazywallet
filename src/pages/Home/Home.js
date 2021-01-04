import React, { Component } from "react";
import { RegularExpense } from "../../components/RegularExpense/RegularExpense";
import { ExpenseHistory } from "../../components/ExpenseHistory/ExpenseHistory";
import DummyData from "../../helper/dummy-data/dummy-data.service";
import './Home.scss';

export class Home extends Component {
    render() {
        const dummyDataObj = new DummyData();
        const regExps = dummyDataObj.getDummyData();
        const latExps = dummyDataObj.getAllExpenses();
        return (
            <div className="home">
                <h3 className="section-header">Regular Expenses</h3>
                <div className="regular-expenses">
                    {regExps.map((value, index) => {
                        return <RegularExpense key={value.id} data={value}/>
                    })}
                </div>

                <h3 className="section-header">Latest Expenses</h3>
                <div className="latest-expenses">
                    {latExps.slice(0,2).map((value, index) => {
                        return <ExpenseHistory key={value.id} data={value} />
                    })}
                </div>
            </div>
        );
    }
}