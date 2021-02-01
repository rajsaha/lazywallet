import React, {useCallback, useEffect, useState} from "react";
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import ExpenseHistory from "@Components/ExpenseHistory/ExpenseHistory";
import './History.scss';

function History() {
    const [latExps, setLatExps] = useState([]);
    const [latExpsLength, setLatExpsLength] = useState(latExps.length);
    const [range, setRange] = useState(0);

    const getAllExpenses = useCallback(() => {
        setLatExps(dummyDataObj.getAllExpenses());
        setLatExpsLength(latExps.length);
    }, [latExps]);

    function removeExpense(id) {
        dummyDataObj.removeExpense(id);
        if (latExpsLength > 1) setLatExpsLength(latExpsLength - 1);
        getAllExpenses();
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllExpenses();
        return (() => {
            setLatExps([]);
        });
    }, [latExps, getAllExpenses]);

    return (
        <div className="history-container">
            <div className="history">
                <div className="section padding-horizontal-15">
                    <div className="section-header">
                        <h1>History</h1>
                        <div className="range-controls">
                            <p onClick={() => setRange(0)} className={range === 0 ? 'selected' : ''}>Today</p>
                            <p onClick={() => setRange(1)} className={range === 1 ? 'selected' : ''}>This Week</p>
                            <p onClick={() => setRange(2)} className={range === 2 ? 'selected' : ''}>Everything</p>
                        </div>
                    </div>
                    <div className="section-content">
                        <div className="latest-expenses">
                            {latExps.map((value, index) => {
                                return <ExpenseHistory key={value.id} data={value} removeExpense={removeExpense}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;