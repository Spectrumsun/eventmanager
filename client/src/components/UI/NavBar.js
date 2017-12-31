import React from 'react';
import { Link } from 'react-router-dom';
import Router from '../Route/Route';


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
              <Link to="/addevent" className="dropdown-item">Add Event</Link>
              <div className="dropdown-divider" />
              <Link to="/events"className="dropdown-item">View Events</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Center
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/addcenter" className="dropdown-item">Add Center</Link>
              <div className="dropdown-menu" />
              <Link to="/centers" className="dropdown-item">View Centers</Link>
            </div>
          </li>
          <br />
        </ul>
        <ul className=" nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link to="/login" className="btn btn-outline-light">Login</Link>
          </li>
          <br />
          <li className="nav-item">
            <Link to="/signup" className="btn btn-outline-light">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Router />
  </div>
);

export default navBar;
