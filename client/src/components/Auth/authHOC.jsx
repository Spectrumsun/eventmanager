/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import { checkAuthHoc } from '../../static/js/validator';


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
     * @param {any} props.params.token
     *
     * @memberof Signup
   */
      componentWillMount(){
          if(!this.props.isAuthenticated){
            checkAuthHoc();
            this.props.history.push("/login")
        }
      }
  /**
     * @description allow component to renders to the DOM
     *
     * @memberof Authenticate
     *
     * @returns {JSX} JSX representation of component
   */
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


