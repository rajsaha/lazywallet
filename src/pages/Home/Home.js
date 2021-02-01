import React, {useEffect} from "react";
import './Home.scss';
import AddExpense from "@Components/AddExpense/AddExpense";
import RegularExpenseGrid from "@Components/RegularExpenseGrid/RegularExpenseGrid";
import SpentOn from "@Components/SpentOn/SpentOn";
import {withRouter} from "react-router";
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";

function Homepage() {
    function addNewExpense({type, title, amount}) {
        if (!title || !amount) {
            return false;
        }

        dummyDataObj.addExpense({
            type: type,
            title: title,
            amount: amount
        });

        return true;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        return (() => {
        });
    }, []);

    return (
        <div className="home">
            <div className="section padding-horizontal-15">
                <div className="section-content">
                    <SpentOn/>
                </div>
            </div>

            <div className="section">
                <div className="section-header padding-horizontal-15">
                    <h1>Regular Expenses</h1>
                </div>
                <div className="section-content">
                    <RegularExpenseGrid></RegularExpenseGrid>
                </div>
            </div>

            <div className="section padding-horizontal-15">
                <div className="section-header">
                    <h1>Add an Expense</h1>
                </div>
                <div className="section-content">
                    <AddExpense expenseCallback={addNewExpense}/>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Homepage);