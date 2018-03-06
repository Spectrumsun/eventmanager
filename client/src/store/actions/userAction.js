/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';
import toast from 'toastr';

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
   console.log(error)
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

export const initUser = (inputs) => {
  return dispatch => {
       axios.post('/users', inputs)
        .then((res) => {
         dispatch(signUpUser(res.data.message))
         //toast.success(res.data.fullname)
        })
        .catch((error) => {
            dispatch(userError(error.response.data.message))
             console.log(error.response.data)
            //toast.error(rror.response.data.message)
        })
  };
};

export const initUserLogin = (inputs) => {
  return dispatch => {
       axios.post('/users/login', inputs)
        .then((response) => {
        console.log(response)
        const token = response.data.token;
        //console.log(token)
        localStorage.setItem('jwtToken', token);
         dispatch(logIn(response.data.fullname, token))
        })
        .catch((error) => {
            dispatch(userError(error.response.data.message))
           
        })
  };
};



