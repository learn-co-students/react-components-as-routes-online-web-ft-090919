import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import About from './About'
import Navbar from './Navbar'





ReactDOM.render((
  <Router><div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} /></div>
  </Router>),
  document.getElementById('root')
);
