import React from 'react';
import './Account.scss';
import ThemeChanger from "@Components/ThemeChanger/ThemeChanger";

function Account({currentTheme}) {
    return (
        <>
            <div className="account-container">
                <div className="section padding-horizontal-15">
                    <div className="section-header">
                        <h1>Toggle Theme</h1>
                    </div>
                    <ThemeChanger currentTheme={currentTheme} />
                </div>
            </div>
        </>
    );
}

export default Account;