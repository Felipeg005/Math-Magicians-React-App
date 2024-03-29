import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './pages/home';
import Nav from './components/Nav';
import Quote from './pages/quote';

const App = () => {
  const arr = [];
  arr.push(1);
  return (
    <Router>
      <Nav class="nav-container"/>
      <Switch>
        <Route path="/Math-Magicians-React-App/" exact component={Home} />
        <Route path="/Math-Magicians-React-App/calculator" component={Calculator} />
        <Route path="/Math-Magicians-React-App/quote" component={Quote} />
      </Switch>
    </Router>
  );
};

export default App;
