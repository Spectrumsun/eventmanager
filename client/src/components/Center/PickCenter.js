import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Display from './pickCenterProp';
import * as actions from '../../store/actions/index';

/**
 * @class Centers
 *
 * @extends {React.Component}
 */
class Centers extends Component {
  /**
   * @description run action on component mount to reload data
   *
   * @param {any} props
   *
   * @memberof Centers
   */
  componentWillMount() {
    this.props.onInitCenters();
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof Centers
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const centers = this.props.center == undefined ? [] : this.props.center.map(center =>
      (
        <Display
          key={center.id}
          id={center.id}
          centerName={center.centerName}
          about={center.about}
          address={center.address}
          city={center.city}
          image={center.imageurl}
          availability={center.availability}
          facility={center.facility}
          selectCenter={id => this.props.selectCenter(id)}
          all={center}
        />
      ));
    return (
      <div>
        <div className="container" style={{ paddingTop: '10px' }}>
          <h1 style={{ textAlign: 'center' }}>Centers</h1>
          {centers}
        </div>
      </div>
    );
  }
}

Centers.propTypes = {
  onInitCenters: PropTypes.func.isRequired,
  center: PropTypes.array.isRequired,
  selectCenter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  center: state.centers.center
});

const mapDispatchToProps = dispatch => ({
  onInitCenters: () => dispatch(actions.initCenters())
});


export default connect(mapStateToProps, mapDispatchToProps)(Centers);
