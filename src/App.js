import React, {useEffect, useMemo, useState} from 'react';
import {Route, useHistory} from "react-router";
import {createMuiTheme, Snackbar, ThemeProvider, useMediaQuery} from '@material-ui/core';
import axios from 'axios';

// SCSS
import './App.scss';
import './theme.scss';

// Pages
import Homepage from '@Pages/Home/Home';
import Regulars from '@Pages/Regulars/Regulars';
import History from '@Pages/History/History';
import Account from '@Pages/Account/Account';
import Login from '@Pages/Login/Login';
import Signup from '@Pages/Signup/Signup';

// Components
import PrimaryNav from '@Components/PrimaryNav/PrimaryNav';
import ProtectedRoute from '@Components/ProtectedRoute/ProtectedRoute';

// Context
import ThemeContext from "@Context/ThemeContext";
import Alert from "./components/Alert/Alert";

function App() {
    const history = useHistory();
    const [appTheme, setAppTheme] = useState('light');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [open, setOpen] = useState(false);

    const showError = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const setTheme = (e) => {
        setAppTheme(e)
    };

    const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${appTheme})`);
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    async function login({username, password}) {
        if (!username || !password) return;

        const _result_login = await axios.post(`http://localhost:8080/login`, {
            username,
            password
        });

        if ('error' in _result_login.data) {
            showError();
            return;
        }

        setIsAuthenticated(true);
        localStorage.setItem('token', _result_login.data.token);
        history.push('/');
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) setIsAuthenticated(true);
    }, [isAuthenticated]);

    return (
        <ThemeContext.Provider value={{
            appTheme,
            setTheme,
        }}>
            <ThemeProvider theme={theme}>
                <div className={`app ${appTheme}`}>
                    <div className="content-container">
                        <ProtectedRoute exact path="/" component={Homepage}/>
                        <ProtectedRoute path="/history" component={History}/>
                        <ProtectedRoute path="/regulars" component={Regulars}/>
                        <ProtectedRoute path="/account"
                                        component={() => <Account currentTheme={appTheme}/>}/>
                        <Route path="/login" component={() => <Login loginCallback={login}/>}></Route>
                        <Route path="/signup" component={Signup}></Route>
                    </div>
                    {isAuthenticated ? <PrimaryNav/> : ''}

                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            Username/Password incorrect
                        </Alert>
                    </Snackbar>
                </div>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
