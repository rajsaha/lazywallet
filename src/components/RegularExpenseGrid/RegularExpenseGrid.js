import React from 'react';
import DummyData from "@Helper/dummy-data/dummy-data.service";
import RegularExpense from "@Components/RegularExpense/RegularExpense";
import './RegularExpenseGrid.scss';

function RegularExpenseGrid() {
    const dummyDataObj = new DummyData();
    const regExps = dummyDataObj.getDummyData();

    return (
        <>
            <div className="regular-expenses">
                {regExps.map((value, index) => {
                    return <RegularExpense key={value.id} data={value} />
                })}
            </div>
        </>
    );
}

export default RegularExpenseGrid;