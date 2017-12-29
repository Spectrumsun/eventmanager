import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import AddCenter from './AddCenter';


const styles = {
  backgroundColor: '#35434a'
};

const navBar = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar navbar-dark fixed-top bar" style={styles} >
      <a className="navbar-brand" href="/"><img src="./image/event.png" width="30" height="30" alt="" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Events
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="addevent.html">Add Event</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="viewevent.html">View Events</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Center
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="addcenter.html">Add Center</a>
              <div className="dropdown-menu" />
              <a className="dropdown-item" href="/center">View Centers</a>
            </div>
          </li>
          <br />
        </ul>
        <ul className=" nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="btn btn-outline-light" href="/login">Login</a>
          </li>
          <br />
          <li className="nav-item">
            <a className="btn btn-outline-light" href="signup.html">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/center" exact component={Centers} />
  </div>
);

export default navBar;
