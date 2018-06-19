import React from 'react';
import PropTypes from 'prop-types';
import PickCenter from '../../Center/PickCenter';

/**
 * @description renders component to the DOM
 *
 * @function eventForm
 *
 * @returns {JSX} component for the form input
 */
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
          <h5><label htmlFor="inputPassword4">Start Time</label></h5>
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
        <h5>
          <label
            htmlFor="exampleFormControlTextarea1"
          >
          purpose
          </label>
        </h5>
        <textarea
          className="form-control"
          value={props.purpose}
          onChange={props.onChange}
          name="purpose"
          rows="3"
          placeholder="Tell people more about the event"
        />
      </div>
      <br />

      <div className="form-inline" >
        <button
          type="button"
          className="btn btn-dark btn-mm"
          style={{ marginRight: '20px' }}
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
          onClick={props.getCenter}
        >
             Add Center
        </button>
        {props.centerName === '' ? null : props.showCenterNane}
      </div>
      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >

        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <PickCenter selectCenter={(id, myCenter) => props.selectCenter(id, myCenter)} />
            <ul className="pagination nav justify-content-center">
              <li className="page-item" onClick={props.minus}>
                <a className="page-link" >Previous</a>
              </li>
              { props.totalPage === '' ? props.numberOfPages1 : props.numberOfPages}
              <li className="page-item" onClick={props.add}>
                <a className="page-link">Next</a>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={props.formValid}
      >Submit
      </button>
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
  showCenterNane: PropTypes.object.isRequired,
  numberOfPages: PropTypes.object.isRequired,
  numberOfPages1: PropTypes.object.isRequired,
  purpose: PropTypes.string.isRequired,
  centerName: PropTypes.string.isRequired,
  getCenter: PropTypes.func.isRequired,
  formValid: PropTypes.bool.isRequired
};


export default eventForm;

