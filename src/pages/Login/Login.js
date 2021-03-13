import React, {useEffect} from 'react';
import './Login.scss';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
    Button,
    TextField
} from "@material-ui/core";
import {useHistory, withRouter} from "react-router";
import {Link} from "react-router-dom";

function Login({ loginCallback }) {
    const history = useHistory();
    useEffect(() => {
       if (localStorage.getItem('token')) history.push('/');
    });
    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={
                    Yup.object({
                        username: Yup.string().trim().required('Required'),
                        password: Yup.string().trim().required('Required'),
                    })
                }
                onSubmit={
                    (values) => {
                        loginCallback({username: values.username, password: values.password});
                    }
                }
            >
                {
                    formik => (
                        <form autoComplete="off" onSubmit={formik.handleSubmit}>
                            <div
                                className="login-container">
                                <h1>Lazywallet</h1>
                                <h4>An expense manager for lazy people</h4>
                                <TextField error={!!formik.touched.username && !!formik.errors.username}
                                           helperText={(formik.touched.username && formik.errors.username) ? formik.errors.username : ''}
                                           type="text" name="username" variant="outlined"
                                           label="Username"
                                           {...formik.getFieldProps('username')} />
                                <TextField type="password" error={!!formik.touched.password && !!formik.errors.password}
                                           helperText={(formik.touched.password && formik.errors.password) ? formik.errors.password : ''}
                                           name="password"
                                           variant="outlined"
                                           {...formik.getFieldProps('password')}
                                           label="Password"/>

                                <div className="add-button">
                                    <Button type="submit" variant="contained" disableElevation color="primary">Login</Button>
                                </div>

                                <div className="goto-signup">
                                    Don't have an account? <Link to="/signup">Sign up</Link>
                                </div>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </>
    );
}

export default withRouter(Login);
