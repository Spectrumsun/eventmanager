import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Display from './pickCenterProp';
import * as actions from '../../store/actions/index';

class Centers extends Component {
  componentWillMount() {
    this.props.onInitCenters();
  }

  render() {
    const centers = this.props.center.map(center =>
      (
        <Display
          key={center.id}
          id={center.id}
          centerName={center.centerName}
          address={center.address}
          city={center.city}
          availability={center.availability}
          facility={center.facility}
          selectCenter={id => this.props.selectCenter(id)}
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
  center: PropTypes.shape({
    centerName: PropTypes.string,
    centeraddress: PropTypes.string,
    availability: PropTypes.string,
    facility: PropTypes.string,
  }).isRequired,
  selectCenter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  center: state.centers.center
});

const mapDispatchToProps = dispatch => ({
  onInitCenters: () => dispatch(actions.initCenters())
});


export default connect(mapStateToProps, mapDispatchToProps)(Centers);
