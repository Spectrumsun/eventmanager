import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'toastr';
import TextField from './TextField';
import * as action from '../../store/actions/index';

/**
 * @class Signup
 *
 * @extends {React.Component}
 */
class Signup extends Component {
  state = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    check: false
  }

  /**
   * @description update component state with current value in dom
   *
   * @param {any} event
   *
   * @memberof Signup
   *
   * @returns {void}
   */
  onChange = (e) => {
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
    if (this.state.fullname === '') {
      toast.error('Full Name cannot be blank');
    } else if (this.state.email === '') {
      toast.error('Email cannot be blank');
    } else if (this.state.password === '') {
      toast.error('Password cannot be blank');
    } else if (this.state.password !== this.state.confirmPassword) {
      toast.error('Confirm Password dont match Password');
    } else if (this.state.password.length < 6) {
      toast.error('Password cannot be less than 6 Charaters');
    } else {
      this.props.onUserCreate(
        this.state,
        this.props.history
      ).then(() =>
        this.setState({ check: false }));
    }
  };

  /**
   * @description renders component to the DOM
   *
   * @memberof Signup
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    return (
      <div className="container" style={{ paddingTop: '150px' }}>
        <h3 className="center">Event Manager</h3>
        <div className="card loginCard" style={{ width: '40rem' }}>
          <div className="card-header">
            <h3>Sign up</h3>
          </div>
          <div className="card-body">
            <div className="cont">
              <form onSubmit={this.onSubmit} className="centerform">
                <TextField
                  label="Full Name"
                  value={this.state.fullname}
                  onChange={this.onChange}
                  name="fullname"
                  type="text"
                  placeholder="your name"
                />

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

                <TextField
                  label="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={this.onChange}
                  name="confirmPassword"
                  type="password"
                  placeholder="Password"
                />


                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input form-control-lg"
                      required
                    />
                    <small>
                    Have read and accepted the terms and conditions ?
                    </small>
                  </label>
                </div>
                <div className="text-center">
                  <button
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
    );
  }
}

Signup.propTypes = {
  onUserCreate: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  error: state.users.error
});


const mapDispatchToProps = dispatch => ({
  onUserCreate: (user, history) =>
    dispatch(action.initUser(user, history))
});


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
