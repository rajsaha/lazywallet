import React, { useEffect, useRef, useState } from "react";
import DummyData from "@Helper/dummy-data/dummy-data.service";
import ExpenseHistory from "@Components/ExpenseHistory/ExpenseHistory";
import './LatestExpenses.scss';

function LatestExpenses() {
    const dummyDataObj = new DummyData();
    const latExps = dummyDataObj.getAllExpenses();
    const latExpsRef = useRef(null);
    const [latExpsHeight, setLatestExpsHeight] = useState(0);
    const [numOfEH, setNumOfEH] = useState(0);

    useEffect(() => {
        setLatestExpsHeight(latExpsRef.current.offsetHeight);
        let _numOfEH = Math.round(latExpsHeight / 80) - 1;
        if (_numOfEH < 0) {
            _numOfEH = 1;
        }
        
        setNumOfEH(_numOfEH);
        return (() => {
            //
        })
    }, [latExpsHeight]);

    return (
        <>
            <div className="latest-expenses" ref={latExpsRef}>
                {latExps.slice(0, numOfEH).map((value, index) => {
                    return <ExpenseHistory key={value.id} data={value} />
                })}
            </div>
        </>
    );
}

export default LatestExpenses;