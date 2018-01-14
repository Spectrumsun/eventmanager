import React from 'react';

const centerFrom = props => (

  <div className="card-body">
    {props.errorMessage}
    {props.successMessage}
    <form onSubmit={props.onSubmit} >
      <div className="form-row">
        <div className="form-group col-md-12">
          <h5><label htmlFor="inputEmail4">Name</label></h5>
          <input
            type="text"
            value={props.centerName}
            onChange={props.onChange}
            name="centerName"
            className="form-control form-control-lg"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <h5><label htmlFor="inputPassword4">City</label></h5>
          <input
            type="text"
            value={props.city}
            onChange={props.onChange}
            name="city"
            className="form-control form-control-lg"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <h5><label htmlFor="inputPassword4">Availability</label></h5>
          <input
            type="text"
            value={props.availability}
            onChange={props.onChange}
            name="availability"
            className="form-control form-control-lg"
            required
          />
        </div>
        <div className="form-group col-md-12">
          <h5><label htmlFor="inputPassword4">Address</label></h5>
          <input
            type="text"
            value={props.address}
            onChange={props.onChange}
            name="address"
            className="form-control form-control-lg"
            required
          />
        </div>
      </div>
      <h5>Add Facilities</h5>
      <input
        type="text"
        value={props.values}
        className="form-control col-md-6 form-control-lg"
        style={{ float: 'left' }}
        name="values"
        onChange={props.onChange}
      />

      <input
        type="reset"
        value="add"
        id="add"
        onChange={props.onChange}
        onClick={props.onClick}
        className="btn btn-info btn-lg"
        style={{ marginLeft: '20px' }}
      />

      <br />
      <br />


      <ul className="list-group col-md-6">
        {props.facility.map(list =>
          (<li className="list-group-item centerlist" key={Math.floor(Math.random() * 1000)}>
            {list}
           </li>))}
      </ul>
      <br />
      <button type="button" className="btn btn-primary btn-lg">Done</button>
      <br />
      <br />
    </form>
  </div>

);


export default centerFrom;
