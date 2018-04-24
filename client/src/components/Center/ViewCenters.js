import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../UI/Loading';
import Display from './getCenter';
import Footer from '../UI/Footer';
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
   * @param {any} props.params.token
   *
   * @memberof EditEvent
   */
  componentDidMount() {
    this.props.onInitCenters();
  }

  /**
   * @description renders component to the DOM
   *
   * @memberof EditEvent
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const centers = this.props.center ===
    undefined || this.props.error != false ?
      <Loading /> : this.props.center.map(center =>
        (<Link
          to={`/centers/${center.id}`}
          key={center.id}
          style={{ color: 'black' }}
        >
          <Display
            centerName={center.centerName}
            address={center.address}
            image={center.imageurl}
          />
         </Link>
        ));
    return (
      <div>
        <div className="center " style={{ paddingTop: '100px' }}>
          <h1 style={{ textAlign: 'center' }}>Centers</h1>
          <div>{centers}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

Centers.propTypes = {
  onInitCenters: PropTypes.func.isRequired,
  center: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  center: state.centers.center,
  error: state.centers.error
});

const mapDispatchToProps = dispatch => ({
  onInitCenters: () => dispatch(actions.initCenters())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Centers);
