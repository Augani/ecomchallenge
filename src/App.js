import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/tailwind.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import Page from './pages'

function App() {
  return (
    <Router>
    <Switch>
      <Route  path="/" component={Page}>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
