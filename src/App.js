import React, {useMemo} from 'react';
import './App.scss';
import Homepage from '@Pages/Home/Home';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Route } from "react-router";
import Regulars from '@Pages/Regulars/Regulars';
import PrimaryNav from '@Components/PrimaryNav/PrimaryNav';
import History from '@Pages/History/History';
import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import './theme.scss';

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'light' : 'dark',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="app dark">
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
                    </div>
                    <PrimaryNav />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
