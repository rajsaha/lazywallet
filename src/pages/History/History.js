import React, { useCallback, useEffect, useState } from "react";
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import ExpenseHistory from "@Components/ExpenseHistory/ExpenseHistory";
import './History.scss';

function History() {
    const [latExps, setLatExps] = useState([]);
    const [latExpsLength, setLatExpsLength] = useState(latExps.length);
    
    const getAllExpenses = useCallback(() => {
        setLatExps(dummyDataObj.getAllExpenses());
        setLatExpsLength(latExps.length);
    }, [latExps]);

    useEffect(() => {
        window.scrollTo(0,0);
        getAllExpenses();
        return (() => {
            setLatExps([]);
        });
    }, [latExps, getAllExpenses]);

    function removeExpense(id) {
        dummyDataObj.removeExpense(id);
        if (latExpsLength > 1) setLatExpsLength(latExpsLength - 1);
        getAllExpenses();
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