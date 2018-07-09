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
    this.props.selectCenter(this.props.id, this.props.centerName);
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
        className="card"
        style={{ width: '12rem' }}
      >
        <img
          className="card-img-top"
          src={this.props.image}
          style={{ width: '20', height: '10' }}
          alt="Card cap"
        />
        <div className="theHeight">
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
          <h6>
            {this.props.address}
          </h6>
          <div className="scrollbar">
          <h6><strong>Facility</strong></h6>
          <ul className="list-group text-capitalize">
            {this.props.facility.map(list =>
                (<li key={Math.floor(Math.random() * 10906) + 5}>
                  {list}
                </li>))
            }
          </ul>
          </div>
          <br />
        </div>
        </div>
        <div className="buttingFix">
          <button
            type="button"
            id="pickCenter"
            className="btn btn-primary btn-sm"
            data-dismiss="modal"
            onClick={this.clicked}
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
  facility: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  selectCenter: PropTypes.func.isRequired,
};

export default Display;
