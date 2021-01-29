import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import './Regulars.scss';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import RegularExpense from '../../components/RegularExpense/RegularExpense';
import AddRegularExpense from '../../components/AddRegularExpense/AddRegularExpense';

function Regulars() {
    const regExps = dummyDataObj.getDummyData();

    useEffect(() => {
        window.scrollTo(0, 0);
        return (() => { });
    }, []);

    return (
        <div className="regulars">
            <div className="section padding-horizontal-15">
                <div className="section-header">Regulars</div>
                <div className="section-content">
                    <div className="latest-expenses">
                        {regExps.map((value, index) => {
                            return <RegularExpense key={value.id} data={value} isEditable={true} />
                        })}
                    </div>
                </div>
            </div>

            <div className="add-regular-expense section padding-horizontal-15">
                <AddRegularExpense />
            </div>
        </div>
    );
}

export default withRouter(Regulars);