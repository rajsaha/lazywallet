import React, {useCallback, useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import './Regulars.scss';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import RegularExpense from '../../components/RegularExpense/RegularExpense';
import AddRegularExpense from '../../components/AddRegularExpense/AddRegularExpense';

function Regulars() {
    const [regExps, setRegExps] = useState([]);
    const [regExpsLength, setRegExpsLength] = useState(regExps.length);
    const [showDialog, setShowDialog] = useState(false);
    const handleClose = () => {
        setShowDialog(false);
    };

    const handleOpen = () => {
        setShowDialog(true);
    };

    const getRegExps = useCallback(() => {
        setRegExps(dummyDataObj.getDummyData());
        setRegExpsLength(regExps.length);
    }, [regExps]);

    function addRegularExpense({type, title, amount}) {
        if (!title || !amount) {
            return false;
        }
        dummyDataObj.addRegularExpense({
            type: type,
            title: title,
            amount: amount
        });
        setRegExpsLength(regExpsLength + 1);
        getRegExps();
        handleClose();
    }

    function removeRegularExpense(id) {
        dummyDataObj.removeRegularExpense(id);
        if (regExpsLength > 1) setRegExpsLength(regExpsLength - 1);
        getRegExps();
        return true;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getRegExps();
        return (() => {
        });
    }, [regExps, getRegExps]);

    return (
        <>
            <div className="regulars-container">
                <div className="regulars">
                    <div className="section padding-horizontal-15">
                        <div className="section-header">Regulars</div>
                        <div className="section-content">
                            <div className="latest-expenses">
                                {regExps.map((value, index) => {
                                    return <RegularExpense key={value.id} data={value} isEditable={true} removeRegularExpense={removeRegularExpense}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add-regular-expense section padding-horizontal-15">
                    <AddRegularExpense addRegularExpenseCallback={addRegularExpense} handleClose={handleClose} handleOpen={handleOpen} showDialog={showDialog}/>
                </div>
            </div>
        </>
    );
}

export default withRouter(Regulars);