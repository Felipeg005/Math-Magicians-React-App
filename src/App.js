import './App.css';
import React from 'react'; // eslint-disable-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';// eslint-disable-line
import Calculator from './components/calculator'; // eslint-disable-line
import Home from './pages/home';
import Nav from './components/Nav'; // eslint-disable-line
import Quote from './pages/quote';

const App = () => {
  const arr = [];
  arr.push(1);
  return (
    <Router>
      <Nav class="nav-container"/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </Router>
  );
};

export default App;
