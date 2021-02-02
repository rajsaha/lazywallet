import React, {useCallback, useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import './Regulars.scss';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import RegularExpense from '../../components/RegularExpense/RegularExpense';
import AddRegularExpense from '../../components/AddRegularExpense/AddRegularExpense';
import EmptyState from "../../components/EmptyState/EmptyState";

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

    function addRegularExpense({type, title, amount, repeat, time}) {
        if (!title || !amount) {
            return false;
        }
        dummyDataObj.addRegularExpense({
            type: type,
            title: title,
            amount: amount,
            repeat: repeat,
            time: time
        });
        setRegExpsLength(regExpsLength + 1);
        getRegExps();
        return true;
    }

    function updateRegularExpense({id, type, title, amount, repeat, time}) {
        if (!title || !amount) {
            return false;
        }
        dummyDataObj.updateRegularExpense({
            id: id,
            type: type,
            title: title,
            amount: amount,
            repeat: repeat,
            time: time
        });
        setRegExpsLength(regExpsLength + 1);
        setRegExpsLength(regExpsLength - 1);
        getRegExps();
        return true;
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
                        <div className="section-header">
                            <h1>Regulars</h1>
                        </div>
                        <div className="section-content">
                            <div className="latest-expenses">
                                {regExps.length > 0 ? regExps.map((value, index) => {
                                    return <RegularExpense key={value.id} data={value} isEditable={true}
                                                           removeRegularExpense={removeRegularExpense}
                                                           updateRegularExpense={updateRegularExpense}/>
                                }) : <EmptyState type="regExp" />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add-regular-expense section padding-horizontal-15">
                    <AddRegularExpense addRegularExpenseCallback={addRegularExpense} handleClose={handleClose}
                                       handleOpen={handleOpen} showDialog={showDialog}/>
                </div>
            </div>
        </>
    );
}

export default withRouter(Regulars);