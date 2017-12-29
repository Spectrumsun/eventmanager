import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class EventForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    //customHistory.push('/events');
  }

  render() {
    return (
      <div className="card-body" >
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <h5><label htmlFor="inputEmail4">Event Name</label></h5>
              <input type="text" className="form-control form-control-lg" required />
            </div>
            <div className="form-group col-md-6">
              <h5><label htmlFor="inputPassword4">Date</label></h5>
              <input type="date" className="form-control form-control-lg" required />
            </div>
            <div className="form-group col-md-6">
              <h5><label htmlFor="inputPassword4">Time</label></h5>
              <input type="time" className="form-control form-control-lg" required />
            </div>
          </div>
          <div className="form-group">
            <h5><label htmlFor="exampleFormControlTextarea1">Description</label></h5>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell people more about the event" />
          </div>
          <button type="button" className="btn btn-dark btn-sm" data-toggle="modal" data-target="#exampleModal">
			  	    Pick center
          </button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog " role="document">
              <div className="modal-content">
                <div className="modal-header centerlist">
                  <h5 className="modal-title " id="exampleModalLabel">List of centers</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body centerlist ">
                  <h3 className="dark color">Havilah Event Centre</h3>
                  <h5 className="center">No 33 Ignobi Street Lagos</h5>
                  <h6 className="center">Facility Available</h6>
                  <ul className="list-group">
                    <li className="list-group-item centerlist" >Open Field</li>
                    <li className="list-group-item centerlist">Sound System</li>
                    <li className="list-group-item centerlist">Free Wifi Hotspot</li>
                    <li className="list-group-item centerlist">Swimming Pool</li>
                  </ul>
                  <br />
                  <button type="button" className="btn btn-primary" data-dismiss="modal">Select</button>
                </div>
                <br />
              </div>
            </div>
          </div>
          <br />
          <br />
          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
      </div>

    );
  }
}

export default EventForm;
