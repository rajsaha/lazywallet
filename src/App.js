import React from 'react';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, History, AttachMoney, Person } from '@material-ui/icons';
import Homepage from '@Pages/Home/Home';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div className="content-container">
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
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
