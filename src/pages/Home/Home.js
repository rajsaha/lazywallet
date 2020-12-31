import React, { Component } from "react";
import { RegularExpense } from "../../components/RegularExpense/RegularExpense";
import DummyData from "../../helper/dummy-data/dummy-data.service";
import './Home.scss';

export class Home extends Component {
    render() {
        const dummyDataObj = new DummyData();
        const dummyData = dummyDataObj.getDummyData();
        return (
            <div className="home">
                <h3 className="section-header">Regular Expenses</h3>
                <div className="regular-expenses">
                    {dummyData.map((value, index) => {
                        return <RegularExpense key={value.id} data={value}/>
                    })}
                </div>
            </div>
        );
    }
}