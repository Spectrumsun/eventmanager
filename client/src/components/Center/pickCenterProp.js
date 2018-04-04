import React, { Component } from 'react';
import PropTypes from 'prop-types';

class display extends Component {
  clicked = () => {
    this.props.selectCenter(this.props.id);
  }

  render() {
    return (
      <div className="card d-lg-inline-block" style={{ width: '13rem' }}>
        <img
          className="card-img-top"
          src={this.props.image}
          style={{ width: '286', height: '180' }}
          alt="Card cap"
        />
        <div className="card-body">
        <nav aria-label="Page navigation example">
          <h6><strong>{this.props.centerName}</strong></h6>
          <h6><strong>{this.props.address}</strong></h6>
          <h6><strong>Availability: </strong>{this.props.availability}</h6>
          <h6><strong>Facility</strong></h6>
          <ul>
            {this.props.facility.map(list => (<li key={this.props.facility.id}>
              {list}
            </li>))}
          </ul>
          </nav>
          <button
            type="button"
            className="btn btn-info btn-sm"
            data-dismiss="modal"
            onClick={this.clicked}
          >Select
          </button>
        </div>
      </div>
    );
  }
}

display.propTypes = {
  centerName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  facility: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectCenter: PropTypes.func.isRequired,
};

export default display;
