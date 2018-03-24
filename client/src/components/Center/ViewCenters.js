import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Display from './getCenter';
import * as actions from '../../store/actions/index';


class Centers extends Component {
  componentDidMount() {
    this.props.onInitCenters();
  }

  render() {
    const isLoading = (
      <div>
        <div className="loader" />
        <p className="center-item shadow" >Unable to connect. Refresh your browser or check your internet connection</p>
      </div>
    );
    const centers = this.props.center === undefined || this.props.error != false ? isLoading : this.props.center.map(center =>
      (<Link to={`/centers/${center.id}`} key={center.id} style={{ color: 'black' }}>
        <Display
          centerName={center.centerName}
          address={center.address}
        />
       </Link>
      ));
    return (
      <div>
        <div className="container" style={{ paddingTop: '100px' }}>
          <h1 style={{ textAlign: 'center' }}>Centers</h1>
          {centers}
        </div>
      </div>
    );
  }
}

Centers.propTypes = {
  onInitCenters: PropTypes.func.isRequired,
  center: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  error: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  center: state.centers.center,
  error: state.centers.error
});

const mapDispatchToProps = dispatch => ({
  onInitCenters: () => dispatch(actions.initCenters())
});


export default connect(mapStateToProps, mapDispatchToProps)(Centers);
