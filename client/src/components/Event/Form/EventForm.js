import React from 'react';
import PropTypes from 'prop-types';
import PickCenter from '../../Center/PickCenter';

const eventForm = props => (
  <div className="card-body" >
    <form onSubmit={props.onSubmit}>
      <div className="form-row">
        <div className="form-group col-md-12">
          <h5><label htmlFor="inputEmail4">Event Name</label></h5>
          <input
            type="text"
            value={props.name}
            onChange={props.onChange}
            name="name"
            className="form-control form-control-lg"
          />
        </div>

        <div className="form-group col-md-6">
          <h5><label htmlFor="inputPassword4">Date</label></h5>
          <input
            type="date"
            value={props.date}
            onChange={props.onChange}
            name="date"
            className="form-control form-control-lg"
          />
        </div>

        <div className="form-group col-md-6">
          <h5><label htmlFor="inputPassword4">Time</label></h5>
          <input
            type="time"
            value={props.time}
            onChange={props.onChange}
            name="time"
            className="form-control form-control-lg"

          />
        </div>
      </div>

      <div className="form-group">
        <h5><label htmlFor="exampleFormControlTextarea1">purpose</label></h5>
        <textarea
          className="form-control"
          value={props.purpose}
          onChange={props.onChange}
          name="purpose"
          rows="3"
          placeholder="Tell people more about the event"
        />
      </div>


      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
      >
             Select Center
      </button>

      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >

        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <PickCenter selectCenter={id => props.selectCenter(id)} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
    </form>
  </div>

);

eventForm.propTypes = {
  selectCenter: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
};


export default eventForm;

