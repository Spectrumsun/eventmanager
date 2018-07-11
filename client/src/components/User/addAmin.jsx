import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from './TextField';
import * as action from '../../store/actions';
import { checkAddAdmin } from '../../static/js/validator';

/**
 * @class Login
 *
 * @extends {React.Component}
 */
export class AddAmin extends Component {
  state = {
    email: '',
    role: '',
    errorMessage: ''
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
  onSubmit = (event) => {
    event.preventDefault();
    checkAddAdmin(this.state.email, this.state.role, (err, res) => {
      if (res) {
        this.props.initaddAdmin(
          this.state,
          this.props.history
        );
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
              <h3>Add New Admin</h3>
            </div>
            <div className="card-body">
              <div className="cont card-body">
                <h5 style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
                  { this.state.errorMessage }
                </h5>
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
                    label="Role"
                    value={this.state.role}
                    onChange={this.onChange}
                    name="role"
                    type="text"
                    placeholder="role"
                  />
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-dark"
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

AddAmin.propTypes = {
  initaddAdmin: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired
};


export const mapDispatchToProps = dispatch => ({
  initaddAdmin: (state, history) =>
    dispatch(action.initaddAdmin(state, history)),
});


export default connect(mapDispatchToProps)(AddAmin);
