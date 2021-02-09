import React, {useMemo, useState} from 'react';
import './App.scss';
import Homepage from '@Pages/Home/Home';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Route } from "react-router";
import Regulars from '@Pages/Regulars/Regulars';
import PrimaryNav from '@Components/PrimaryNav/PrimaryNav';
import History from '@Pages/History/History';
import Account from '@Pages/Account/Account';
import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import './theme.scss';
import ThemeContext from "@Context/ThemeContext";

function App() {
    const [appTheme, setAppTheme] = useState('light');
    const setTheme = (e) => {
        console.log('Parent', e);
        setAppTheme(e);
    };

    const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: 'light')`);
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeContext.Provider value={{
            appTheme,
            setTheme
        }}>
            <ThemeProvider theme={theme}>
                <Router>
                    <div className={`app ${appTheme}`}>
                        <div className="content-container">
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/regulars">
                                <Regulars />
                            </Route>
                            <Route exact path="/history">
                                <History />
                            </Route>
                            <Route exact path="/account">
                                <Account />
                            </Route>
                        </div>
                        <PrimaryNav />
                    </div>
                </Router>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
