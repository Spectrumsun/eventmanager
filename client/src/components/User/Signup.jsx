import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'toastr';
import TextField from './TextField';
import * as action from '../../store/actions/index';
import Terms from './termsandcondition';

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
    const reWhiteSpace = new RegExp(/^\s+$/);
    if (this.state.fullname === '') {
      toast.error('Full Name cannot be blank');
    } else if (reWhiteSpace.test(this.state.fullname) === true) {
      toast.error('Full Name cannot white space');
    } else if (this.state.email === '') {
      toast.error('Email cannot be blank');
    } else if (this.state.password === '') {
      toast.error('Password cannot be blank');
    } else if (this.state.password !== this.state.confirmPassword) {
      toast.error('Confirm Password dont match Password');
    } else if (this.state.password.length < 6) {
      toast.error('Password cannot be less than 6 Charaters');
    } else {
      this.setState({ formValid: true });
      this.props.onUserCreate(
        this.state,
        this.props.history
      ).then(() => {
        this.setState({ formValid: false });
      });
    }
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


const mapDispatchToProps = dispatch => ({
  onUserCreate: (user, history) =>
    dispatch(action.initUser(user, history))
});


export default connect(null, mapDispatchToProps)(Signup);
