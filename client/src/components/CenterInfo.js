import React from 'react';

const centerInfo = () => (
  <div className="container" style={{ paddingTop: '100px' }}>
    <div className="card loginCard" style={{ width: '45rem' }}>
      <div className="card-header dark">
        <h1 className="color">Center Info</h1>
      </div>
      <div className="card-body">
        <form action="addcenter.html">
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Center Name</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="Yaba Center" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Adress</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="No 12 Yaba road Surulere" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Events Holding</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="Wedding, Seminar, Birthday" />>
            </div>
          </div>
          <h5>Avaliable Facilities</h5>
          <ul className="list-group col-md-4">
            <li className="list-group-item centerlist">Open Field</li>
            <li className="list-group-item centerlist">Sound System</li>
            <li className="list-group-item centerlist">Free Wifi Hotspot</li>
            <li className="list-group-item centerlist">Swimming Pool</li>
          </ul>
          <br />
          <button type="submit" className="btn btn-dark" style={{ float: 'left' }}>Edit</button>
        </form>
        <a className="btn btn-danger" href="viewevent.html" style={{ marginLleft: '20px' }}>Delete</a>
      </div>
    </div>
  </div>
);

export default centerInfo;
