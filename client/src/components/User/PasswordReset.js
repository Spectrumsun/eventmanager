import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toast from 'toastr';
import { connect } from 'react-redux';
import TextField from './TextField';
import * as action from '../../store/actions/index';

class PasswordReset extends Component {
  state = {
    email: '',
  }

  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.initPasswordRest(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <div className="container" style={{ paddingTop: '100px' }}>
          <div className="card loginCard" style={{ width: '30rem' }}>
            <div className="card-header">
              <h3>Login</h3>
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

const mapDispatchToProps = dispatch => ({
  initPasswordRest: (user, history) => dispatch(action.initPasswordRest(user, history)),
});

export default connect(null, mapDispatchToProps)(PasswordReset);
