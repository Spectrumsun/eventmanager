import React from 'react';

const passwordRest = () => (
  <div className="container" style={{ paddingTop: '100px' }}>
    <div className="card loginCard" style={{width: '30rem' }}>
      <div className="card-header">
        <h3>Password Reset</h3>
      </div>
      <div className="card-body">
        <div className="cont card-body">
          <form action="viewevent.html" className="centerform">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1 ">Email address</label>
              <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required />
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

export default passwordRest;
