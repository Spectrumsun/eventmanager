import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'toastr';
import TextField from './TextField';
import * as action from '../../store/actions/index';

/**
 * @class Login
 *
 * @extends {React.Component}
 */
class Login extends Component {
  state = {
    email: '',
    password: '',
    check: false
  }

  /**
   * @description update component state with current value in dom
   *
   * @param {any} event
   *
   * @memberof Login
   *
   * @returns {void}
   */
  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * @description vaildate data in state
   * sends state to api with action dispatch
   * @param {any} event
   *
   * @memberof Login
   *
   * @returns {void}
   */
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ check: true });
    if (this.state.email === '') {
      toast.error('Email cannot be blank');
    } else if (this.state.password === '') {
      toast.error('Password cannot be blank');
    } else {
      this.props.initUserLogin(
        this.state,
        this.props.history
      ).then(() =>
        this.setState({ check: false }));
    }
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof ForgotPassword
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    return (
      <div>
        <div className="container" style={{ paddingTop: '150px' }}>
          <h3 className="center">Event Manager</h3>
          <div className="card loginCard" style={{ width: '30rem' }}>
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <div className="cont card-body">
                <form onSubmit={this.onSubmit} className="centerform">
                  <TextField
                    label="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                    name="email"
                    type="email"
                    placeholder="Vaild Email"
                  />

                  <TextField
                    label="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <small ><Link
                    to="/forgotpassword"
                    className="center-item"
                  >Forgot password?
                          </Link>
                  </small>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-dark"
                      disabled={this.state.check}
                    >Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  initUserLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired
};


const mapStateToProps = state => ({
  error: state.users.error
});


const mapDispatchToProps = dispatch => ({
  initUserLogin: (user, history) =>
    dispatch(action.initUserLogin(user, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
