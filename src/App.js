import React, { useState } from 'react';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, History, AttachMoney, Person } from '@material-ui/icons';
import Homepage from '@Pages/Home/Home';
import {
  BrowserRouter as Router, Route, Switch, useHistory
} from "react-router-dom";
import Regulars from '@Pages/Regulars/Regulars';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    'z-index': 1000,
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  let history = useHistory();

  return (
    <div className="content-container">
      <div className="content">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/regulars" component={Regulars} />
          </Switch>
        </Router>
      </div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          console.log(value);
          setValue(newValue);
          switch (value) {
            case 1:
              history.push('/');
              break;
            case 0:
              history.push('/regulars');
              break;
            default:
              history.push('/');
              break;
          }
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Regulars" icon={<AttachMoney />} />
        <BottomNavigationAction label="History" icon={<History />} />
        <BottomNavigationAction label="Account" icon={<Person />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
