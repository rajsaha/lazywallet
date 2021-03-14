import React, {useEffect, useState} from 'react';
import RegularExpense from "@Components/RegularExpense/RegularExpense";
import './RegularExpenseGrid.scss';
import EmptyState from "@Components/EmptyState/EmptyState";
import RegularExpenseService from "@Helper/RegularExpenseService/RegularExpenseService";

function RegularExpenseGrid() {
    const [regExps, setRegExps] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        RegularExpenseService.getRegularExpenses({userId}).then(res => {
            console.log(res);
            setRegExps(res.data.data.getRegularExpenses[0].regExpenses);
        });
    }, [userId]);

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
