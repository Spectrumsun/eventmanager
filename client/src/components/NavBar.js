import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import AddCenter from './AddCenter';
import ViewCenters from './ViewCenters';
import AddEvent from './Addevent';
import ViewEvents from './ViewEvents';



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
              <Link to='/addevent' className="dropdown-item">Add Event</Link>
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
              < Link to="/centers" className="dropdown-item">View Centers</Link>
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
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/addevent" exact component={AddEvent} />
      <Route path="/events" exact component={ViewEvents} />
      <Route path="/addcenter" exact component={AddCenter} />
      <Route path="/centers" exact component={ViewCenters} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
    </Switch>
   
  </div>
);

export default navBar;
