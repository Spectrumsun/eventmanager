import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Router from '../Route/Route';
import * as action from '../../store/actions/index';

const styles = {
  backgroundColor: '#35434a'
};

class NavBar extends Component {
  state = {

  }
  logout = (e) => {
    e.preventDefault();
    this.props.onLogOut(this.props.history);
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLink = (
      <ul className=" nav navbar-nav navbar-right">
        <li className="nav-item">
            <Link to="/logout" className="btn btn-outline-light" onClick={this.logout}>Logout</Link>
          </li>
      </ul>
    );

    const guessLink = (
      <ul className=" nav navbar-nav navbar-right">
        <li className="nav-item">
            <Link to="/login" className="btn btn-outline-light">Login</Link>
          </li>
        <br />
        <li className="nav-item">
            <Link to="/signup" className="btn btn-outline-light">Sign up</Link>
          </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar navbar-dark fixed-top bar" style={styles} >
          <a className="navbar-brand" href="/"><img src="./image/event.png" width="30" height="30" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
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
            { isAuthenticated ? userLink : guessLink }
          </div>
        </nav>
        <Router />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  onLogOut: history => dispatch(action.initUserLogout(history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
