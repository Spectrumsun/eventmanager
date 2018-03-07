/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';
import toast from 'toastr';
import { BrowserRouter, Redirect } from 'react-router-dom'

export const signUpUser = (user) => {
  return {
    type: actionTypes.SIGN_UP_USER,
    user: user
    }
};


export const logIn = (user, token) => {
 // console.log(user)
  return {
    type: actionTypes.LOGGED_IN,
    user: user,
    token: token
    }
};

export const logout = () => {
  return {
    type: actionTypes.LOGGED_OUT
  }
}

export const logOutandRdirect = () => {
  return{

  }
   
}

export const userError = (error) => {
  return {
    type: actionTypes.USER_ERROR,
    error: error
    }
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token

  }
} 

export const initUser = (inputs, history) => {
  return dispatch => {
       axios.post('/users', inputs)
        .then((res) => {
          toast.success(res.data.message)
          dispatch(signUpUser(res))
          history.push('/') 
        })
        .catch((error) => {
          const newError = error.response.data.errorMessage
          newError ? newError.map(err => toast.error(err)) : toast.error(error.response.data.message)
          dispatch(userError(error.response.data.errorMessage))  
        })
  };
};

export const initUserLogin = (inputs, history) => {
  return dispatch => {
       axios.post('/users/login', inputs)
        .then((res) => {
          toast.success(res.data.message)
          history.push('/')
          console.log(res)
          const token = res.data.token;
          console.log(token)
          localStorage.setItem('jwtToken', token);
         dispatch(logIn(res.data.fullname, token))
        })
        .catch((error) => {
          const newError = error.response.data.errorMessage
          newError ? newError.map(err => toast.error(err)) : toast.error(error.response.data.message)
          dispatch(userError(error.response.data.errorMessage))
        })
  };
};



