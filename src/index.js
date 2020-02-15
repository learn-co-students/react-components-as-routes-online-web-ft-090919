import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Use router to coordinate what is displayed in URL bar
// 'Route' component takes two props, 'path' takes the URL path, and 'component' tells it what component to render
// If using multiple paths, wrap all inside a <div> since Router can only have one child element
// Using 'exact path' instead of just 'path' ensures that parent routes are not also render each time a nested route is rendered
// Ex: the 'Home' component below would still be rendered along with 'Login' if navigating to /login if only using path="/"
ReactDOM.render((
  <Router>
    <div>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);


// Can use 'render()' directly inside of 'Route' if rendering a simple presentational thing:
{/* <Route path="/" render={() => <h1>Home!</h1>} /> */}

// Previous render method:
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );

