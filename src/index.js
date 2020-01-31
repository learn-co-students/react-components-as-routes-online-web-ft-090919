import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//imported react-router functions

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <Route path="/" component={Home} />
  </Router>),
  document.getElementById('root')
);
