import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toast from 'toastr';
import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.initUserLogin(this.state);
    let errors = '';
    if (this.state.email === '') {
      errors += 'Email cannot be empty';
    }

    if (this.state.password === '') {
      errors += 'Password cannot be empty';
    }

    if (errors) {
      toast.error(errors);
    } else {
      // toast.success(this.props.user);
    }
  }


  // this.props.history.replace('/');

  render() {
    let errorMessage = null;

    if (this.props.error) {
      errorMessage = (<p style={{ color: 'red', textAlign: 'center' }}><strong>{this.props.error}</strong></p>);
    }

    let successMessage = null;

    if (this.props.user) {
      successMessage = (<p style={{ color: 'black', textAlign: 'center' }}><strong>{this.props.user}</strong></p>);
    }

    return (
      <div>
        <div className="container" style={{ paddingTop: '100px' }}>
          <div className="card loginCard" style={{ width: '30rem' }}>
            <div className="card-header">
              {errorMessage}
              {successMessage}
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <div className="cont card-body">
                <form onSubmit={this.onSubmit} className="centerform">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="your-email@example.com"

                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      name="password"
                      className="form-control form-control-lg"
                      required
                    />
                    <small ><Link to="/passwordreset" className="center-item">Password Reset</Link></small>
                    <br />
                  </div>
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


const mapStateToProps = state => ({
  user: state.users.user,
  error: state.users.error
});

const mapDispatchToProps = dispatch => ({
  initUserLogin: user => dispatch(action.initUserLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
