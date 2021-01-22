import React from 'react';
import './App.scss';
import Homepage from '@Pages/Home/Home';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Route } from "react-router";
import Regulars from '@Pages/Regulars/Regulars';
import PrimaryNav from '@Components/PrimaryNav/PrimaryNav';

function App() {
  return (
    <Router>
      <div className="content-container">
        <div className="content">
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/regulars">
            <Regulars />
          </Route>
        </div>
      </div>
      <PrimaryNav />
    </Router>
  );
}

export default App;
