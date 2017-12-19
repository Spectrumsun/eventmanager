import React from 'react';
import router from 'react-router';
import event from '../static/image/event.png';

const styles = {
  backgroundColor: '#35434a'
};

const navBar = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar navbar-dark fixed-top bar" style={styles} >
      <a className="navbar-brand" href="index.html"><img src={event} width="30" height="30" alt="" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
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
              <div className="addcenter.html" />
              <a className="dropdown-item" href="viewcenters.html">View Centers</a>
            </div>
          </li>
          <br />
        </ul>
        <ul className=" nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="btn btn-outline-light" href="login.html">Login</a>
          </li>
          <br />
          <li className="nav-item">
            <a className="btn btn-outline-light" href="signup.html">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default navBar;
