import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Display from './pickCenterProp';
import * as actions from '../../store/actions/index';

class Centers extends Component {
  componentDidMount() {
    this.props.onInitCenters();
  }

  render() {
    const centers = this.props.center.map(center =>
      (
        <Display
          key={center.id}
          centerName={center.centerName}
          address={center.address}
          city={center.city}
          availability={center.availability}
          facility={center.facility}
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

const mapStateToProps = state => ({
  center: state.centers.center
});

const mapDispatchToProps = dispatch => ({
  onInitCenters: () => dispatch(actions.initCenters())
});


export default connect(mapStateToProps, mapDispatchToProps)(Centers);
