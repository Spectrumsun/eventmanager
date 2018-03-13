import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

class Login extends Component {
  componentWillMount() {
    this.props.initemailverify(this.props.match.params.token, this.props.history);
  }

  render() {
    return (
      <div />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initemailverify: (token, history) => dispatch(action.initemailverify(token, history)),
});

export default connect(null, mapDispatchToProps)(Login);
