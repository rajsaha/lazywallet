import React, { useEffect, useState } from "react";
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import ExpenseHistory from "@Components/ExpenseHistory/ExpenseHistory";
import './History.scss';

function History() {
    const [latExps, setLatExps] = useState([]);
    
    useEffect(() => {
        getAllExpenses();
        return (() => {
            setLatExps([]);
        });
    }, [latExps]);

    function removeExpense(id) {
        dummyDataObj.removeExpense(id);
        getAllExpenses();
    }

    function getAllExpenses() {
        setLatExps([]);
        setLatExps(dummyDataObj.getAllExpenses());
    }

    return (
        <div className="history">
            <div className="section padding-horizontal-15">
                <div className="section-header">History</div>
                <div className="section-content">
                    <div className="latest-expenses">
                        {latExps.map((value, index) => {
                            return <ExpenseHistory key={value.id} data={value} removeExpense={removeExpense} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;