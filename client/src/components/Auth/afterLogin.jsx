/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import toast from 'toastr';
import {withRouter} from "react-router-dom";



export default function (ComposedComponent) {
/**
   * @class Authenticate
   *
   * @extends {React.Component}
 */
  class Authenticate extends Component {
  /**
     * @description run action on component 
     * verify if user is sign in or not
     * @param {any} props.isAuthenticated
     *
     * @memberof Signup
   */
    componentWillMount(){
          if(this.props.isAuthenticated){
            this.props.history.push("/")
        }
      }
    render() {
      return (
       <ComposedComponent {...this.props}/>
      );
    }
  }
    const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

    return withRouter(
      connect(mapStateToProps)
      (Authenticate)
    );
}


