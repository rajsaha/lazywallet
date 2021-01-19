import React from "react";
import './Home.scss';
import AddExpense from "@Components/AddExpense/AddExpense";
import LatestExpenses from "@Components/LatestExpenses/LatestExpenses";
import RegularExpenseGrid from "@Components/RegularExpenseGrid/RegularExpenseGrid";

function Homepage() {
    return (
        <div className="home">
            <div className="section">
                <h3 className="section-header">Regular Expenses</h3>
                <RegularExpenseGrid></RegularExpenseGrid>
            </div>

            <div className="section">
                <h3 className="section-header">Latest Expenses</h3>
                <LatestExpenses></LatestExpenses>
            </div>

            <div className="section">
                <h3 className="section-header">Add an Expense</h3>
                <AddExpense />
            </div>
        </div>
    );
}

export default Homepage;