import React from "react";
import DummyData from "@Helper/dummy-data/dummy-data.service";
import ExpenseHistory from "@Components/ExpenseHistory/ExpenseHistory";

function LatestExpenses() {
    const dummyDataObj = new DummyData();
    const latExps = dummyDataObj.getAllExpenses();

    return (
        <>
            <div className="latest-expenses">
                {latExps.slice(0, 2).map((value, index) => {
                    return <ExpenseHistory key={value.id} data={value} />
                })}
            </div>
        </>
    );
}

export default LatestExpenses;