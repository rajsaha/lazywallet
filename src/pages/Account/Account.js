import React from 'react';
import './Account.scss';
import ThemeChanger from "@Components/ThemeChanger/ThemeChanger";

function Account() {
    return (
        <>
            <div className="account-container">
                <div className="section padding-horizontal-15">
                    <div className="section-header">
                        <h1>Theme</h1>
                    </div>
                    <ThemeChanger />
                </div>
            </div>
        </>
    );
}

export default Account;