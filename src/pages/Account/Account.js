import React, {useContext} from 'react';
import './Account.scss';
import ThemeChanger from "@Components/ThemeChanger/ThemeChanger";
import {useHistory, withRouter} from "react-router";
import Button from "@material-ui/core/Button";
import ThemeContext from "../../context/ThemeContext";

function Account({currentTheme}) {
    const history = useHistory();
    const {setTheme} = useContext(ThemeContext);
    function logout() {
        localStorage.setItem('token', '');
        setTheme('light');
        history.push('/login');
    }
    return (
        <>
            <div className="account-container">
                <div className="section padding-horizontal-15">
                    <div className="section-header">
                        <h1>Toggle Theme</h1>
                    </div>
                    <ThemeChanger currentTheme={currentTheme} />
                </div>

                <div className="section padding-horizontal-15">
                    <div className="logout">
                        <Button onClick={logout} variant="outlined">Logout</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(Account);
