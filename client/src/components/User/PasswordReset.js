import React, { Component } from 'react';
import toast from 'toastr';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from './TextField';
import * as action from '../../store/actions/index';

class PasswordReset extends Component {
  state = {
    password: '',
    confirmPassword: ''
  }

  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
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
      );
    }
  }

  render() {
    return (
      <div>
        <div className="container" style={{ paddingTop: '100px' }}>
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
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
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
  initpasswordreset: (token, user, history) => dispatch(action.initpasswordreset(token, user, history)),
});

export default connect(null, mapDispatchToProps)(PasswordReset);
