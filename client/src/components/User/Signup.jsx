import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from './TextField';
import * as action from '../../store/actions/index';
import Terms from './termsandcondition';
import { checkSingUp } from '../../static/js/validator';

/**
 * @class Signup
 *
 * @extends {React.Component}
 */
export class Signup extends Component {
  state = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    formValid: false
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
  onChange = (event) => {
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
    checkSingUp(this.state.fullname, this.state.email, this.state.password, this.state.confirmPassword, (err, res) => {
      if (res) {
        this.setState({ formValid: true });
        this.props.onUserCreate(
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
                  id="fullname"
                  type="text"
                  placeholder="your name"
                />

                <TextField
                  label="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                  name="email"
                  type="email"
                  id="email"
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
                      <span data-toggle="modal" id="terms" data-target="#exampleModalLong" style={{ cursor: 'pointer' }}>Have read and accepted the terms and conditions ?</span>

                      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLongTitle">Terms and Conditions</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <Terms />
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                id="close"
                                className="btn btn-primary"
                                data-dismiss="modal"
                              >Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </small>
                  </label>
                </div>
                <div className="text-center">
                  <button
                    id="signup"
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
    );
  }
}

Signup.propTypes = {
  onUserCreate: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired
};


export const mapDispatchToProps = dispatch => ({
  onUserCreate: (user, history) =>
    dispatch(action.initUser(user, history))
});


export default connect(null, mapDispatchToProps)(Signup);
