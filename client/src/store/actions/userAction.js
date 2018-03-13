/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios'; 
import toast from 'toastr';
import setAuthToken from '../../components/Auth/auth';
import jwt from 'jsonwebtoken';

export const signUpUser = (user) => {
  return {
    type: actionTypes.SIGN_UP_USER,
    user: user
    }
};


export const logIn = (user) => {
  return {
    type: actionTypes.LOGGED_IN,
    user: user,
    }
};

export const setUser = (user) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    user: user
  }
}


export const userError = (error) => {
  return {
    type: actionTypes.USER_ERROR,
    error: error
    }
};


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
          dispatch(userError(error.response.data.errorMessage));
        })
  };
};


export const initUserLogin = (inputs, history) => {
  return dispatch => {
       axios.post('/users/login', inputs)
        .then((res) => {
          toast.success(res.data.message)
          history.push('/')
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          setAuthToken(token);
          dispatch(setUser(jwt.decode(token)));
          dispatch(logIn(res.data.message))
        })
        .catch((error) => {
          const newError = error.response.data.errorMessage
          newError ? newError.map(err => toast.error(err)) : toast.error(error.response.data.message)
          dispatch(userError(error.response.data.errorMessage))
        })
  };
};


export const initUserLogout = (history) => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    toast.success('Logout Successfull')
    history.push('/')
    dispatch(setUser({}))
  }
}


export const initconfirmPassword = (user, history) => {
   return dispatch => {
       axios.post('/users/forgotpassword', user)
        .then((res) => {
          toast.success(res.data.message)
          history.push('/')
        })
        .catch((error) => {
          const newError = error.response.data.errorMessage
          newError ? newError.map(err => toast.error(err)) : toast.error(error.response.data.message) &&  history.push('/')
          dispatch(userError(error.response.data.errorMessage))
        })
  };
}


export const initpasswordreset = (token, input, history) => {
  return dispatch => {
      axios.post(`/users/password/reset/${token}`, input)
      .then((res) => {
        toast.success(res.data.message)
        history.push('/login')
      }).catch((error) => {
        const newError = error.response.data.errorMessage
        newError ? newError.map(err => toast.error(err)) : toast.error(error.response.data.message) &&  history.replace('/')
       dispatch(userError(error.response.data.errorMessage))
      })
  }
}


export const initemailverify = (token, history) => {
  return dispatch => {
    axios.get(`/users/email/${token}`)
    .then((res) => {
      toast.success(res.data.message)
      history.replace('/login');
    }).catch((error) => {
      console.log(error)
      toast.error(error.response.data.message)
       history.replace('/login');
    })
  }

}