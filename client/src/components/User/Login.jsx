import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from './TextField';
import * as action from '../../store/actions/index';
import { checkLogin } from '../../static/js/validator';

/**
 * @class Login
 *
 * @extends {React.Component}
 */
export class Login extends Component {
  state = {
    email: '',
    password: '',
    formValid: false,
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
  onChange =(event) => {
    this.setState({ [event.target.name]: event.target.value });
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
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ formValid: false });
    checkLogin(this.state.email, this.state.password, (err, res) => {
      if (res) {
        this.setState({ formValid: true });
        this.props.initUserLogin(
          this.state,
          this.props.history
        ).then(() => {
          this.setState({ formValid: false });
        });
      }
    });
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
                    id="email"
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
                    id="passwordReset"
                    className="center-item"
                  >Forgot password?
                          </Link>
                  </small>

                  <div className="text-center">
                    <button
                      id="login"
                      type="submit"
                      className="btn btn-outline-dark"
                      disabled={this.state.formValid}
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


export const mapDispatchToProps = dispatch => ({
  initUserLogin: (user, history) =>
    dispatch(action.initUserLogin(user, history)),
});

export default connect(null, mapDispatchToProps)(Login);
