import React from 'react';

const centerFrom = () => (

  <div className="card-body">
    <form action="viewevent.html">
      <div className="form-row">
        <div className="form-group col-md-6">
          <h5><label htmlFor="inputEmail4">Name</label></h5>
          <input type="text" className="form-control form-control-lg" placeholder required />
        </div>
        <div className="form-group col-md-6">
          <h5><label htmlFor="inputPassword4">Address</label></h5>
          <input type="text" className="form-control form-control-lg" required />
        </div>
      </div>
      <h5>Add Facilities</h5>
      <input type="text" className="form-control col-md-6 form-control-lg" id="addFacility" style={{ float: 'left' }} />
      <input type="reset" value="add" id="add" className="btn btn-info btn-lg" style={{ marginLeft: '20px' }} />
      <br />
      <br />
      <ul className="list-group col-md-5" id="list" >
        <li className="list-group-item ">Chairs</li>
        <li className="list-group-item ">Car pack</li>
        <li className="list-group-item">Sound System</li>
      </ul>
      <br />
      <button type="submit" className="btn btn-primary btn-lg">Done</button>
      <br />
      <br />
    </form>
  </div>
);

export default centerFrom;

