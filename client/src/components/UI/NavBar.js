import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import toast from 'toastr';
import PropTypes from 'prop-types';
import Router from '../Route/Route';
import * as action from '../../store/actions/index';


const styles = {
  backgroundColor: '#35434a',
};

/**
 * @class NavBar
 *
 * @extends {React.Component}
 */
class NavBar extends Component {
  state = {
    search: '',
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.search === '') {
      toast.error('Search box cant be empty');
    } else {
      this.props.onSearch(this.state.search, 6, 1)
        .then(() => this.props.history.push('/searchcenter'));
    }
  }

  /**
   * @description delete token
  * log user out and redirect to home
   * @param {any} event
   *
   * @memberof NavBar
   *
   * @returns {void}
   */
  logout = (e) => {
    e.preventDefault();
    this.props.onLogOut(this.props.history);
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof NavBar
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const { isAuthenticated } = this.props.auth;
    const admin = this.props.auth.user === null ?
      'nouser' : this.props.auth.user.role;

    const myEvent = (
      <Link
        to="/events"
        className="dropdown-item"
      >My Event
      </Link>

    );
    const userLink = (
      <ul className=" nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link
            to="/logout"
            className="btn btn-outline-light"
            onClick={this.logout}
          >Logout
          </Link>
        </li>
      </ul>
    );

    const guessLink = (
      <ul className=" nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link
            to="/login"
            className="btn btn-outline-light"
          >Login
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link
            to="/signup"
            className="btn btn-outline-light"
          >Sign up
          </Link>
        </li>
      </ul>
    );

    const center = (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#/"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
                Center
        </a>
        <div
          className="dropdown-menu"
          aria-labelledby="navbarDropdown"
        >
          <Link
            to="/addcenter"
            className="dropdown-item"
          >Add Center
          </Link>
          <div className="dropdown-menu" />
          <Link
            to="/centers"
            className="dropdown-item"
          >View Centers
          </Link>
          <div className="dropdown-menu" />
          <Link
            to="/addAdmin"
            className="dropdown-item"
          >Add Admin
          </Link>
        </div>
      </li>
    );

    return (
      <div>
        <nav
          className="navbar navbar-expand-md navbar navbar-dark fixed-top bar"
          style={styles}
        >
          <a className="navbar-brand" href="/"><img
            src="https://res.cloudinary.com/skybound/image/upload/v1522444986/eventmanager/static/event.png"
            width="30"
            height="30"
            alt=""
            className="d-inline-block align-top"
          />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link" >
                Event Manager<span className="sr-only">
                (current)
                             </span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  to="/"
                  className="nav-link"
                >
                Home
                  <span className="sr-only">
                (current)
                  </span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                Events
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    to="/addevent"
                    className="dropdown-item"
                  >Add Event
                  </Link>
                  <div className="dropdown-divider" />
                  { isAuthenticated ? myEvent : null }
                  <div className="dropdown-divider" />
                  <Link
                    to="/centers"
                    className="dropdown-item"
                  >View Centers
                  </Link>
                </div>
              </li>
              {admin === process.env.VALUE ? center : null}
            </ul>
            { isAuthenticated ? userLink : guessLink }
            <form
              className="form-inline my-2 my-lg-0"
              style={{ marginRight: '15px' }}
              onSubmit={this.onSubmit}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                name="search"
                placeholder="by name or location"
                aria-label="Search"
                onChange={this.onChange}
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
              Search Centers
              </button>
            </form>
          </div>
        </nav>
        <Router />
      </div>
    );
  }
}

NavBar.propTypes = {
  onLogOut: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.shape({
      id: PropTypes.number,
      role: PropTypes.string,
    })
  }).isRequired,
  onSearch: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  onLogOut: history =>
    dispatch(action.initUserLogout(history)),

  onSearch: (search, totalPage, next) =>
    dispatch(action.initSearchCenters(search, totalPage, next))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
