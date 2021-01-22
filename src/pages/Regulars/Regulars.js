import React from 'react';
import { withRouter } from 'react-router';
import './Regulars.scss';
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import RegularExpense from '../../components/RegularExpense/RegularExpense';

function Regulars() {
    const regExps = dummyDataObj.getDummyData();

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
        </div>
    );
}

export default withRouter(Regulars);