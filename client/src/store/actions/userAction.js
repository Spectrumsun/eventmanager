/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios'; 
import jwt from 'jsonwebtoken';
import { errorHandler, successHandler, logOutMessage } from '../../static/js/responsesHandler'

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
          successHandler(res)
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
          successHandler(res)
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
    logOutMessage();
    history.push('/')
    dispatch(setUser({}))
  }
}


export const initaddAdmin = ( state, history) => {
  return dispatch => {
    return axios.post('/users/setadmin?token='+localStorage.jwtToken, state)
    .then((res) => {
      successHandler(res)
      history.push('/')
      dispatch(addAdmin(res.data.message))
    })
    .catch((error) => {
      errorHandler(error)
      dispatch(userError(error))
    })
  }
}

export const initpasswordreset = (token, input, history) => {
  return dispatch => {
    return axios.post(`/users/password/reset/${token}`, input)
      .then((res) => {
        successHandler(res)
        history.push('/login')
        dispatch(passwordReset(res.data.message))
      }).catch((error) => {
        errorHandler(error)
        history.replace('/')
       dispatch(userError(error))
      })
  }
}


export const initconfirmPassword = (user, history) => {
   return dispatch => {
    return axios.post('/users/forgotpassword', user)
        .then((res) => {
          successHandler(res)
          history.push('/')
          dispatch(confirmPassword(res.data.message))
        })
        .catch((error) => {
          errorHandler(error)
          history.replace('/')
          dispatch(userError(error))
        })
  };
}


export const initemailverify = (token, history) => {
  return dispatch => {
  return  axios.get(`/users/email/${token}`)
    .then((res) => {
      successHandler(res)
      dispatch(emailVerify(res.data.message))
      history.replace('/login');
    }).catch((error) => {
      errorHandler(error)
      history.replace('/login');
      dispatch(userError(error))
    })
  }
}