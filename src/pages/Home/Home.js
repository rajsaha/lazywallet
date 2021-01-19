import React from "react";
import './Home.scss';
import AddExpense from "@Components/AddExpense/AddExpense";
import RegularExpenseGrid from "@Components/RegularExpenseGrid/RegularExpenseGrid";
import SpentOn from "@Components/SpentOn/SpentOn";

function Homepage() {
    return (
        <div className="home">
            <div className="section">
                <div className="section-content">
                    <SpentOn />
                </div>
            </div>

            <div className="section">
                <h3 className="section-header">Regular Expenses</h3>
                <div className="section-content">
                    <RegularExpenseGrid></RegularExpenseGrid>
                </div>
            </div>

            <div className="section">
                <h3 className="section-header">Add an Expense</h3>
                <div className="section-content">
                    <AddExpense />
                </div>
            </div>
        </div>
    );
}

export default Homepage;