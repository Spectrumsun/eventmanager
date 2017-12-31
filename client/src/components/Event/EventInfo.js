import React from 'react';


const eventInfo = () => (
  <div>
    <div className="container" style={{ width: '45rem' }}>
      <div className="card loginCard">
        <div className="card-header dark">
          <h1 className="color">Event Info</h1>
        </div>
        <div className="card-body">
          <form action="addevent.html">
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-lg-2 col-form-label">Event Name</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext " id="staticEmail" value="Wedding Party" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Date</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="12-12-2017" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Time</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="10:00 AM - 4:00PM" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Center</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="Nikoms Event Center Yaba" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="A wedding party" />
              </div>
            </div>
            <button type="submit" className="btn btn-dark" style={{ float: 'left' }}>Edit</button>
          </form>
          <a className="btn btn-danger" href="viewevent.html" style={{ marginLeft: '20px' }}>Delete</a>
        </div>
      </div>
    </div>
  </div>
);

export default eventInfo;
