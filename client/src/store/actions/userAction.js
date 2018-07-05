/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios'; 
import toast from 'toastr';
import jwt from 'jsonwebtoken';
import { EMLINK } from 'constants';

function errorHandler(error) {
  const newError = error.response.data.errorMessage
  newError ? newError.map(err => 
  toast.error(err)) : toast.error(
  error.response.data.message)
}

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

export const addAdmin = (message) => {
  return {
    type: actionTypes.ADD_ADMIN,
    message: message
  }
}

export const confirmPassword = (message) => {
  return {
    type: actionTypes.CONFIRM_PASSWORD,
    message: message
  }
}

export const passwordReset = (message) => {
  return {
    type: actionTypes.PASSWORD_RESET,
    message: message
  }
}

export const emailVerify = (message) => {
  return {
    type: actionTypes.EMAIL_VERIFY,
    message: message
  }
}

export const initUser = (inputs, history) => {
  return dispatch => {
    return axios.post('/users', inputs)
        .then((res) => {
          toast.success(res.data.message)
          history.push('/')
          dispatch(signUpUser(res.data))
        })
        .catch((error) => {
          dispatch(userError(error));
         errorHandler(error)
        })
    };
};


export const initUserLogin = (inputs, history) => {
  return dispatch => {
    return axios.post('/users/login', inputs)
        .then((res) => {
          toast.success(res.data.message)
          history.push('/')
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          dispatch(setUser(jwt.decode(token)));
          dispatch(logIn(res.data.message))
        })
        .catch((error) => {
          errorHandler(error)
          dispatch(userError(error))
        })
  };
};

export const initUserLogout = (history) => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    toast.success('Logout Successfully')
    history.push('/')
    dispatch(setUser({}))
  }
}


export const initaddAdmin = ( state, history) => {
  return dispatch => {
    return axios.post('/users/setadmin?token='+localStorage.jwtToken, state)
    .then((res) => {
      toast.success(res.data.message)
      history.push('/')
      dispatch(addAdmin(res.data.message))
    })
    .catch((error) => {
      toast.error(error.response.data.error)
      dispatch(userError(error))
    })
  }
}

export const initpasswordreset = (token, input, history) => {
  return dispatch => {
    return axios.post(`/users/password/reset/${token}`, input)
      .then((res) => {
        toast.success(res.data.message)
        history.push('/login')
        dispatch(passwordReset(res.data.message))
      }).catch((error) => {
        const newError = error.response.data.errorMessage
        newError ? newError.map(err => 
        toast.error(err)) : toast.error(
        error.response.data.message) &&  history.replace('/')
       dispatch(userError(error))
      })
  }
}


export const initconfirmPassword = (user, history) => {
   return dispatch => {
    return axios.post('/users/forgotpassword', user)
        .then((res) => {
          toast.success(res.data.message)
          history.push('/')
          dispatch(confirmPassword(res.data.message))
        })
        .catch((error) => {
          const newError = error.response.data.errorMessage
          newError ? newError.map(err => 
          toast.error(err)) : toast.error(
          error.response.data.message) &&  history.push('/')
          dispatch(userError(error))
        })
  };
}


export const initemailverify = (token, history) => {
  return dispatch => {
  return  axios.get(`/users/email/${token}`)
    .then((res) => {
      toast.success(res.data.message)
      dispatch(emailVerify(res.data.message))
      history.replace('/login');
    }).catch((error) => {
      toast.error(error.response.data.message)
      history.replace('/login');
      dispatch(userError(error))
    })
  }
}