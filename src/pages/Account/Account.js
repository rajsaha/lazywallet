import React from "react";
import "./Account.scss";
import ThemeChanger from "@Components/ThemeChanger/ThemeChanger";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";

function Account({ currentTheme, logoutCallback }) {
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
            <Button onClick={logoutCallback} variant="outlined">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Account);
