import React, { Component } from 'react';
import { connect } from 'react-redux';
import toast from 'toastr';
import PropTypes from 'prop-types';
import TextField from './TextField';
import * as action from '../../store/actions/index';

class ForgotPassword extends Component {
  state = {
    email: '',
  }

  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === '') {
      toast.error('Email cannot be blank');
    } else {
      this.props.initconfirmPassword(this.state, this.props.history);
    }
  }

  render() {
    return (
      <div>
        <div className="container" style={{ paddingTop: '100px' }}>
          <div className="card loginCard" style={{ width: '30rem' }}>
            <div className="card-header">
              <h3>Forgot Password</h3>
            </div>
            <div className="card-body">
              <div className="cont card-body">
                <form onSubmit={this.onSubmit} className="centerform">
                  <TextField
                    label="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                    name="email"
                    type="email"
                    placeholder="Vaild Email"
                  />
                  <div className="text-center">
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  initconfirmPassword: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired
};

const mapDispatchToProps = dispatch => ({
  initconfirmPassword: (user, history) => dispatch(action.initconfirmPassword(user, history)),
});

export default connect(null, mapDispatchToProps)(ForgotPassword);
