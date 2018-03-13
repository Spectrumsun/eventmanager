import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toast from 'toastr';
import { connect } from 'react-redux';
import TextField from './TextField';
import * as action from '../../store/actions/index';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.initUserLogin(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <div className="container" style={{ paddingTop: '100px' }}>
          <div className="card loginCard" style={{ width: '30rem' }}>
            <div className="card-header">
              <h3>Login</h3>
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
                    label="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <small ><Link to="/forgotpassword" className="center-item">Password Reset</Link></small>

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
  initUserLogin: (user, history) => dispatch(action.initUserLogin(user, history)),
});

export default connect(null, mapDispatchToProps)(Login);
