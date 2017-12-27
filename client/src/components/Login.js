import React from 'react';

const styles = {
  width: '30rem'
};

const login = () => (
  <div>
    <div className="container">
      <div className="card loginCard" style={styles}>
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <div className="cont card-body">
            <form action="viewevent.html" className="centerform">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder required />
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

export default login;
