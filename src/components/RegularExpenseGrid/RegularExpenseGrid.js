import React from 'react';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import RegularExpense from "@Components/RegularExpense/RegularExpense";
import './RegularExpenseGrid.scss';
import EmptyState from "@Components/EmptyState/EmptyState";

function RegularExpenseGrid() {
    const regExps = dummyDataObj.getDummyData();

    return (
        <>
            <div className="regular-expenses">
                {
                    regExps.length > 0
                        ? regExps.map((value, index) => {
                            return <RegularExpense key={value.id} data={value}/>
                        })
                        : <EmptyState type="regExp" doAction={true}></EmptyState>
                }
            </div>
        </>
    );
}

export default RegularExpenseGrid;