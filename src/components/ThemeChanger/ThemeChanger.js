import React, { useContext } from "react";
import "./ThemeChanger.scss";
import { Formik } from "formik";
import { FormControlLabel, Switch } from "@material-ui/core";
import AppContext from "../../context/AppContext";

function ThemeChanger({ currentTheme }) {
  const { setTheme } = useContext(AppContext);

  return (
    <>
      <Formik
        initialValues={{ isDark: currentTheme === "dark" }}
        onSubmit={() => {}}
      >
        {(formik) => (
          <form className="theme-changer-form">
            <p>{formik.values.isDark ? "Dark" : "Light"}</p>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.isDark}
                  {...formik.getFieldProps("isDark")}
                  name="isDark"
                  color="primary"
                  onChangeCapture={(e) => {
                    setTheme(e.target.checked ? "dark" : "light");
                  }}
                />
              }
              label=""
            />
          </form>
        )}
      </Formik>
    </>
  );
}

export default ThemeChanger;
