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
import AppContext from "@Context/AppContext";
import Alert from "./components/Alert/Alert";

function App() {
    const history = useHistory();
    const [appTheme, setAppTheme] = useState('light');
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('Username/Password incorrect');
    const [alertSeverity, setAlertSeverity] = useState('error');
    const [token, setToken] = useState('');

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

        const _result_login = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/login`, {
            username,
            password
        });

        if ('error' in _result_login.data) {
            setAlertMessage('Username/password incorrect');
            setAlertSeverity('error');
            showError();
            return;
        }

        localStorage.setItem('token', _result_login.data.token);
        localStorage.setItem('userId', _result_login.data.userId);
        setToken(_result_login.data.token);
        history.push('/');
    }

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setToken('');
        setTheme('light');
        history.push('/login');
    }

    async function signup({email, username, password}) {
        if (!email || !username || !password) return;

        const _result_signup = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/signup`, {
            email,
            username,
            password
        });

        if ('error' in _result_signup.data) {
            setAlertMessage('Something went wrong');
            setAlertSeverity('error');
            showError();
            return;
        }

        setAlertMessage('Sign up successful');
        setAlertSeverity('success');
        history.push('/login');
    }

    useEffect(() => {
        setToken(localStorage.getItem('token'));
        axios.interceptors.request.use(
            config => {
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }

                return config;
            }
        )
    }, [token]);

    return (
        <AppContext.Provider value={{
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
                                        component={() => <Account currentTheme={appTheme} logoutCallback={logout}/>}/>
                        <Route path="/login" component={() => <Login loginCallback={login}/>}></Route>
                        <Route path="/signup" component={() => <Signup signupCallback={signup} />}></Route>
                    </div>
                    {token ? <PrimaryNav/> : ''}

                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={alertSeverity}>
                            {alertMessage}
                        </Alert>
                    </Snackbar>
                </div>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
