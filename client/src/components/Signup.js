import React from 'react';


const signup = () => (
  <div className="container" style={{ paddingTop: '100px' }}>
    <div className="card loginCard" style={{ width: '40rem' }}>
      <div className="card-header">
        <h3>Sign up</h3>
      </div>
      <div className="card-body">
        <div className="cont">
          <form action="login.html" className="centerform">
            <div className="form-group">
              <label htmlFor="1">Full Name</label>
              <input type="text" className="form-control form-control-lg" placeholder="your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="2">Email address</label>
              <input type="email" className="form-control form-control-lg" placeholder="your-email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="2 ">Password</label>
              <input type="password" className="form-control form-control-lg" placeholder="Password" required />
            </div>
            <div className="form-group">
              <label htmlFor="3">Confirm Password</label>
              <input type="password" className="form-control form-control-lg" placeholder="Password" required />
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input form-control-lg" required />
                <small> Have read and accepted the terms and conditions ?</small>
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-outline-dark">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default signup;
