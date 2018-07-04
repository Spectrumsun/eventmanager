import React, { Component } from 'react';
import { connect } from 'react-redux';
import toast from 'toastr';
import PropTypes from 'prop-types';
import TextField from './TextField';
import * as action from '../../store/actions/index';

/**
 * @class ForgotPassword
 *
 * @extends {React.Component}
 */
class ForgotPassword extends Component {
  state = {
    email: '',
  }

  /**
   * @description update component state with current value in dom
   *
   * @param {any} event
   *
   * @memberof ForgotPassword
   *
   * @returns {void}
   */
  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * @description sends state to api with action dispatch
   *
   * @param {any} event
   *
   * @memberof ForgotPassword
   *
   * @returns {void}
   */
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === '') {
      toast.error('Email cannot be blank');
    } else {
      this.props.initconfirmPassword(this.state, this.props.history);
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
              <h3>Password Reset</h3>
            </div>
            <div className="card-body">
              <div className="cont card-body">
                <form onSubmit={this.onSubmit} className="centerform">
                  <TextField
                    label="Email address"
                    value={this.state.email}
                    onChange={this.onChange}
                    name="email"
                    type="email"
                    placeholder="Vaild Email"
                  />
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-dark"
                    >Email me a recovery link
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

ForgotPassword.propTypes = {
  initconfirmPassword: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired
};

const mapDispatchToProps = dispatch => ({
  initconfirmPassword: (user, history) =>
    dispatch(action.initconfirmPassword(user, history)),
});

export default connect(null, mapDispatchToProps)(ForgotPassword);
