import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {


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
                <form action="viewevent.html" className="centerform">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" required />
                    <small ><a href="passwordreset.html" className="center-item">Password Reset</a></small>
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


export default Login;
