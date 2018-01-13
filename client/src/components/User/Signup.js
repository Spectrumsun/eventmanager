import React, { Component } from 'react';
import axios from 'axios';
import toast from 'toastr';
import { connect } from 'react-redux';
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
    //  console.log(this.state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    let errors = '';
    if (this.state.fullname === '') {
      errors += 'Full Name cannot be empty!\n';
    }
    if (this.state.password !== this.state.confirmPassword) {
      errors += 'Password do not match';
    }

    if (errors && this.props.onUserError()) {
      toast.error(errors);
      toast.error(this.props.onUserError());
      console.log(this.props.onUserError());
    } else {
      this.props.onUserCreate(this.state);
      this.props.history.push('/login');
      toast.success('processed to Sign in');

    }
  }


  render() {
    //  const { errorMessgae } = this.state;
    return (
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="card loginCard" style={{ width: '40rem' }}>
          <div className="card-header">
            <h3>Sign up</h3>
          </div>
          <div className="card-body">
            <div className="cont">
              <form onSubmit={this.onSubmit} className="centerform">
                <div className="form-group">
                  <label htmlFor="1">Full Name</label>
                  <input
                    type="text"
                    value={this.state.fullname}
                    onChange={this.onChange}
                    name="fullname"
                    className="form-control form-control-lg"
                    placeholder="your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="2">Email address</label>
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="your-email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="2 ">Password</label>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="3">Confirm Password</label>
                  <input
                    type="password"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                    name="confirmPassword"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input form-control-lg" required />
                    <small> Have read and accepted the terms and conditions ?</small>
                  </label>
                </div>
                <div className="text-center">
                  <input type="submit"value="Submit" className="btn btn-outline-dark" />
                </div>
              </form>
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
  onUserCreate: user => dispatch(action.initUser(user)),
  onUserError: () => dispatch(action.userError())
});


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
