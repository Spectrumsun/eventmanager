import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        style={{ width: '10rem' }}
      >
        <img
          className="card-img-top"
          src={this.props.image}
          style={{ width: '20', height: '10' }}
          alt="Card cap"
        />
        <div className="card-body">
          <nav aria-label="Page navigation example">
            <h6><strong>{this.props.centerName}</strong></h6>
            <div class="btn-group dropup">
  <button type="button" class="btn btn-secondary">
    Split dropup
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <h6><strong>{this.props.centerName}</strong></h6>

  
  </div>
</div>

         

            {/* <h6>
              <strong>
                Availability:
              </strong>{this.props.availability}
            </h6>
            <h6><strong>Facility</strong></h6>
            <h6><strong>his.props.facility</strong></h6>
            <ul>

              {this.props.facility.map(list =>
                (<li key={this.props.facility.id}>
                  {list}
                 </li>))}
            </ul> */}
          </nav>
          <button
            type="button"
            className="btn btn-dark btn-sm"
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
  availability: PropTypes.string.isRequired,
  facility: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectCenter: PropTypes.func.isRequired,
};

export default Display;
