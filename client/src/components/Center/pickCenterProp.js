import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * @class Display
 *
 * @extends {React.Component}
 */
class Display extends Component {
  /**
   * @description update facility state
   *
   * @param {any} event
   *
   * @memberof display
   *
   * @returns {void}
   */
  clicked = () => {
    this.props.selectCenter(this.props.id);
  }


  /**
   * @description renders component to the DOM
   *
   * @memberof CenterInfo
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    return (
      <div
        className="card d-lg-inline-block"
        style={{ width: '12rem' }}
      >
        <img
          className="card-img-top"
          src={this.props.image}
          style={{ width: '20', height: '10' }}
          alt="Card cap"
        />
        <div className="card-body text-capitalize">
          <h6>
            <Link
              to={`/centers/${this.props.id}`}
              style={{ color: '#2E3A41' }}
              key={this.props.id}
              target="_blank"
            ><strong>{this.props.centerName}</strong>
            </Link>
          </h6>
          <div className="btn-group dropup">
            <button
              type="button"
              className="btn btn-primary btn-sm dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ float: 'left' }}
            >
              <span className="sr-only">Toggle Dropdown</span>more
            </button>
            <div className="dropdown-menu">
              <div className="px-4 py-3">
                <div className="form-group">
                  <label
                    htmlFor="exampleDropdownFormEmail1"
                  >
                    Address
                  </label>
                  <li
                    className="list-group-item"
                  >
                    {this.props.address}
                  </li>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleDropdownFormPassword1"
                  >
                  Availability
                  </label>
                  <li
                    className="list-group-item"
                  >
                    {this.props.availability}
                  </li>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleDropdownFormPassword1"
                  >
                  Facility
                  </label>
                  <ul
                    className="list-group col-md-6 text-capitalize"
                  >
                    {this.props.facility.map(list =>
                        (<li
                          className="list-group-item"
                          key={Math.floor(Math.random() * 10906) + 5}
                        >
                          {list}
                         </li>))}
                  </ul>
                </div>
              </div>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
              >
              We have the best centers || Close
              </a>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            data-dismiss="modal"
            onClick={this.clicked}
            style={{ marginLeft: '20px' }}
          >Select
          </button>
        </div>
      </div>
    );
  }
}

Display.propTypes = {
  centerName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  facility: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  selectCenter: PropTypes.func.isRequired,
};

export default Display;
