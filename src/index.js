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


const About = () => { //About route to router
  return (
    <div>
    <h1>This is my about component!</h1>
    </div>
  );
};



const Login = () => { //Login route to router
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder=Password />
          <label htmlFor=password>Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <Route path="/" component={Home} />
  </Router>),
  document.getElementById('root')
);
