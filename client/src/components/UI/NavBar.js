import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import Router from '../Route/Route';
import * as action from '../../store/actions/index';

// require('dotenv').config()

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
    const admin = this.props.auth.user.role;

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

    const center = (
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
    );

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar navbar-dark fixed-top bar" style={styles} >
          <a className="navbar-brand" href="/"><img src="https://res.cloudinary.com/skybound/image/upload/v1521281910/event.png" width="30" height="30" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link" >Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Events
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/addevent" className="dropdown-item">Add Event</Link>
                  <div className="dropdown-divider" />
                  <Link to="/events"className="dropdown-item">View Events</Link>
                  <div className="dropdown-divider" />
                  <Link to="/centers" className="dropdown-item">View Centers</Link>
                </div>
              </li>
              {admin === 'ADMIN1' ? center : null}

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

NavBar.propTypes = {
  onLogOut: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.shape({
      id: PropTypes.number,
      role: PropTypes.string,
    })
  }).isRequired,
};


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  onLogOut: history => dispatch(action.initUserLogout(history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
