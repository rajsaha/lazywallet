import React, {useEffect, useState} from "react";
import './Home.scss';
import AddExpense from "@Components/AddExpense/AddExpense";
import RegularExpenseGrid from "@Components/RegularExpenseGrid/RegularExpenseGrid";
import SpentOn from "@Components/SpentOn/SpentOn";
import {withRouter} from "react-router";
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import HomeService from "@Helper/HomeService/HomeService";

function Homepage() {
    const [spentData, setSpentData] = useState({
        spentMostOn: 'n/a',
        spentThisMonth: 0,
        spentToday: 0
    });
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
        const userId = localStorage.getItem('userId');
        HomeService.getHomeData({ userId }).then(res => setSpentData(res.data.data.getHomeData));

        return (() => {
        });
    }, []);

    return (
        <div className="home">
            <div className="section padding-horizontal-15">
                <div className="section-content">
                    <SpentOn {...spentData}/>
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
