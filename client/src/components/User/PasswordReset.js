import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toast from 'toastr';
import { connect } from 'react-redux';
import TextField from './TextField';
import * as action from '../../store/actions/index';

class Login extends Component {
  state = {
    password:'',
    confirmPassword: ''
  }

  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.initpasswordreset(this.props.match.params.token, this.state, this.props.history);
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


const mapDispatchToProps = dispatch => ({
  initpasswordreset: (token, user, history) => dispatch(action.initpasswordreset(token, user, history)),
});

export default connect(null, mapDispatchToProps)(Login);
