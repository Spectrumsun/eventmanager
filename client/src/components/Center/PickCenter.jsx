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
    this.props.onInitCenters(3, 1);
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof Centers
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const centers = this.props.center === undefined ? [] : this.props.center.map(center =>
      (
        <Display
          key={center.id}
          id={center.id}
          centerName={center.centerName.split(' ')[0]}
          about={center.about}
          address={center.address}
          city={center.city}
          image={center.imageurl}
          facility={center.facility}
          selectCenter={(id, myCenter) =>
            this.props.selectCenter(id, myCenter)}
          all={center}
        />
      ));
    return (
      <div>
        <div className="container" style={{ paddingTop: '10px' }}>
          <h1 style={{ textAlign: 'center' }}>Centers</h1>
          <div>
            <div className="fixModel">
              {centers}
            </div>
          </div>
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
  onInitCenters: (limit, page) =>
    dispatch(actions.initCenters(3, 1))
});


export default connect(mapStateToProps, mapDispatchToProps)(Centers);
