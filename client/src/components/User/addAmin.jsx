import React, { Component } from 'react';
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
export class AddAmin extends Component {
  state = {
    email: '',
    role: '',
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
    if (this.state.email === '') {
      toast.error('Email cannot be blank');
    } else if (this.state.role === '') {
      toast.error('role cannot be blank');
    } else {
      this.props.initaddAdmin(
        this.state,
        this.props.history
      );
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
              <h3>Add New Admin</h3>
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



const mapDispatchToProps = dispatch => ({
  initaddAdmin: (state, history) =>
    dispatch(action.initaddAdmin(state, history)),
});


export default connect(mapDispatchToProps)(AddAmin);
