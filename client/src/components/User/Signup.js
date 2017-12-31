import React, { Component } from 'react';
import axios from 'axios';
import toast from 'toastr';


class Signup extends Component {
  state = {
    FullName: '',
    EmailAddress: '',
    Password: '',
    ConfirmPassword: '',
    errorMessgae: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.Fullname === '') {
      toast.error('Full Name cannot be empty!!!');
    }

    if (this.state.EmailAddress === '') {
      toast.error('Email cannnot be empty!!!!');
    }

    if (this.state.Password !== this.state.ConfirmPassword) {
      toast.error('Passwords do not match');
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
                    value={this.state.FullName}
                    onChange={this.onChange}
                    name="FullName"
                    className="form-control form-control-lg"
                    placeholder="your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="2">Email address</label>
                  <input type="email" value={this.state.EmailAddress} onChange={this.onChange} name="EmailAddress" className="form-control form-control-lg" placeholder="your-email@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="2 ">Password</label>
                  <input type="password" value={this.state.Password} onChange={this.onChange} name="Password" className="form-control form-control-lg" placeholder="Password" required />
                </div>
                <div className="form-group">
                  <label htmlFor="3">Confirm Password</label>
                  <input type="password" value={this.state.ConfirmPassword} onChange={this.onChange} name="ConfirmPassword" className="form-control form-control-lg" placeholder="Password" required />
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


export default Signup;
