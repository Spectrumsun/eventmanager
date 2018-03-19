import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import * as action from '../../store/actions/index';

class EmailVerify extends Component {
  componentWillMount() {
    this.props.initemailverify(this.props.match.params.token, this.props.history);
  }

  render() {
    const isLoading = (
      <div className="loader" />
    );

    return (
      <div>
        <h2>Verifying Email</h2>
        { isLoading }
      </div>
    );
  }
}


EmailVerify.propTypes = {
  initemailverify: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string,
    }),
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  initemailverify: (token, history) => dispatch(action.initemailverify(token, history)),
});

export default connect(null, mapDispatchToProps)(EmailVerify);
