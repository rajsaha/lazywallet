import React, {useContext} from 'react';
import './ThemeChanger.scss';
import { Formik } from 'formik';
import {FormControlLabel, Switch} from "@material-ui/core";
import ThemeContext from "../../context/ThemeContext";

function ThemeChanger() {
    const {theme, setTheme} = useContext(ThemeContext);

    function getTheme() {
        switch (theme) {
            case 'dark':
                return true;
            case 'light':
                return true;
            default:
                return false;
        }
    }

    return (
        <>
            <Formik initialValues={{isDark: getTheme()}}>
                {formik => (
                    <form className="theme-changer-form">
                        <p>{formik.values.isDark ? 'Dark' : 'Light'}</p>
                        <FormControlLabel
                            control={<Switch
                                checked={formik.values.isDark} {...formik.getFieldProps('isDark')}
                                name="isDark" color="primary" onChangeCapture={e => {
                                    setTheme(e.target.checked ? 'dark' : 'light');
                            }} />}/>
                    </form>
                )}
            </Formik>
        </>
    );
}

export default ThemeChanger;