import React from 'react';
import uuid from 'uuid-random';
import PropTypes from 'prop-types';

const centerFrom = props => (
  <div className="card-body" >
    <form onSubmit={props.onSubmit}>
      <div className="form-row">
        <div className="form-group col-md-12">
          <h5><label htmlFor="inputEmail4">Center Name</label></h5>
          <input
            type="text"
            value={props.name}
            onChange={props.onChange}
            name="name"
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
        <div className="form-group col-md-12">
          <h5><label htmlFor="inputPassword4">Add Image</label></h5>
          <input
            type="file"
            onChange={props.handleImageChange}
            name="image"
            accept="image/gif, image/png, image/jpeg"
            className="btn btn-light"
            required
          />
        </div>
        <div className="imgPreview">
          {props.imagePreview}
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
        type="button"
        value="add"
        id="add"
        disabled={!props.values}
        onClick={props.onClick}
        className="btn btn-info btn-lg"
        style={{ marginLeft: '20px' }}
      />

      <br />
      <br />
      <ul className="list-group col-md-6">
        {props.facility.map((list, i) =>
          (<li className="list-group-item d-flex justify-content-between align-items-center" key={uuid()}>
            {list}
            <span className="badge badge-danger badge-pill point" onClick={() => props.removeFacility(i)}>X</span>
           </li>))}
      </ul>
      <br />
      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      <br />
      <br />
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped"
          role="progressbar"
          style={{ width: props.progress }}
          aria-valuenow={props.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >{props.progress}
        </div>
      </div>
    </form>
  </div>
);


centerFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  progress: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  values: PropTypes.string.isRequired,
  facility: PropTypes.array.isRequired,
};

export default centerFrom;
