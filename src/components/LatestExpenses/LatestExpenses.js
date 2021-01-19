import React from "react";
import DummyData from "@Helper/dummy-data/dummy-data.service";
import ExpenseHistory from "@Components/ExpenseHistory/ExpenseHistory";
import './LatestExpenses.scss';

function LatestExpenses() {
    const dummyDataObj = new DummyData();
    const latExps = dummyDataObj.getAllExpenses();

    return (
        <>
            <div className="latest-expenses">
                {latExps.map((value, index) => {
                    return <ExpenseHistory key={value.id} data={value} />
                })}
            </div>
        </>
    );
}

export default LatestExpenses;