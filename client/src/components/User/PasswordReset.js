import React, { Component } from 'react';
import toast from 'toastr';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from './TextField';
import * as action from '../../store/actions/index';

/**
 * @class PasswordReset
 *
 * @extends {React.Component}
 */
class PasswordReset extends Component {
  state = {
    password: '',
    confirmPassword: '',
    check: false
  }

  /**
   * @description update component state with current value in dom
   *
   * @param {any} event
   *
   * @memberof PasswordReset
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
   * @memberof PasswordReset
   *
   * @returns {void}
   */
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ check: true });
    if (this.state.password === '') {
      toast.error('Password cannot be blank');
    } else if (this.state.password !== this.state.confirmPassword) {
      toast.error('Confirm Password dont match Password');
    } else if (this.state.password.length < 6) {
      toast.error('Password cannot be less than 6 Charaters');
    } else {
      this.props.initpasswordreset(
        this.props.match.params.token,
        this.state, this.props.history
      ).then(() =>
        this.setState({ check: false }));
    }
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof PasswordReset
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    return (
      <div>
        <div className="container" style={{ paddingTop: '1500px' }}>
          <h3 className="center">Event Manager</h3>
          <div className="card loginCard" style={{ width: '30rem' }}>
            <div className="card-header">
              <h3>Password Reset</h3>
            </div>
            <div className="card-body">
              <div className="cont card-body">
                <form onSubmit={this.onSubmit} className="centerform">
                  <TextField
                    label="New Password"
                    value={this.state.password}
                    onChange={this.onChange}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />

                  <TextField
                    label="Password"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                    name="confirmPassword"
                    type="password"
                    placeholder="confirm Password"
                  />
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-dark"
                      disabled={this.state.check}
                    >
                    Submit
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

PasswordReset.propTypes = {
  initpasswordreset: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string,
    }),
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  initpasswordreset: (token, user, history) =>
    dispatch(action.initpasswordreset(token, user, history)),
});

export default connect(null, mapDispatchToProps)(PasswordReset);
