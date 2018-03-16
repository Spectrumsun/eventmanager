import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Display from './getCenter';
import * as actions from '../../store/actions/index';


class Centers extends Component {
  componentDidMount() {
    this.props.onInitCenters();
  }

  render() {
    const isLoading = (
      <div className="loader" />
    )
    const centers = this.props.center === undefined ? isLoading : this.props.center.map(center =>
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

const mapStateToProps = state => ({
  center: state.centers.center,
});

const mapDispatchToProps = dispatch => ({
  onInitCenters: () => dispatch(actions.initCenters())
});


export default connect(mapStateToProps, mapDispatchToProps)(Centers);
