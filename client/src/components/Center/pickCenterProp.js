import React, { Component } from 'react';
class display extends Component {
  state;

  clicked = () => {
    this.props.selectCenter(this.props.id)
  }

  render() {
    return (
      <div className="card d-lg-inline-block" style={{ width: '20rem' }}>
        <div className="card-body">
          <h6 className="card-title"><strong>Name: </strong>{this.props.centerName}</h6>
          <h6 className="card-title "><strong>Address: </strong>{this.props.address}</h6>
          <h6 className="card-title "><strong>City: </strong>{this.props.city}</h6>
          <h6 className="card-title "><strong>Availability: </strong>{this.props.availability}</h6>
          <h6 className="card-title "><strong>Facility</strong></h6>
          <h6 className="card-title ">{this.props.facility}</h6>
          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.clicked}>Select</button>
        </div>
      </div>
    );
  }
}

export default display;
