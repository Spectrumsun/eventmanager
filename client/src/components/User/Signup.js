import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'toastr';
import TextField from './TextField';
import * as action from '../../store/actions/index';


class Signup extends Component {
  state = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
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
      );
    }
  };


  render() {
    return (
      <div className="container" style={{ paddingTop: '100px' }}>
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
                    <input type="checkbox" className="form-check-input form-control-lg" required />
                    <small> Have read and accepted the terms and conditions ?</small>
                  </label>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-dark">Submit</button>
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
  onUserCreate: (user, history) => dispatch(action.initUser(user, history))
});


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
