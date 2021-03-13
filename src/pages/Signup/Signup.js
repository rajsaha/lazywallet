import React from 'react';
import './Signup.scss';
import * as Yup from "yup";
import {Button, TextField} from "@material-ui/core";
import {Formik} from "formik";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

function Signup() {
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    username: '',
                    password: ''
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string().trim().required('Required'),
                        username: Yup.string().trim().required('Required'),
                        password: Yup.string().trim().required('Required'),
                    })
                }
                onSubmit={
                    (values, {resetForm}) => {
                        console.log(values);
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
                                <TextField error={!!formik.touched.email && !!formik.errors.email}
                                           helperText={(formik.touched.email && formik.errors.email) ? formik.errors.email : ''}
                                           type="text" name="email" variant="outlined"
                                           label="Email"
                                           {...formik.getFieldProps('email')} />
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
                                    <Button type="submit" variant="contained" disableElevation color="primary">Sign Up</Button>
                                </div>

                                <div className="goto-signup">
                                    Have an account? <Link to="/login">Login</Link>
                                </div>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </>
    );
}

export default withRouter(Signup);
