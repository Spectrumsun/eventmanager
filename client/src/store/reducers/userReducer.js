import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  user: [],
  message: [],
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_USER:
      return {
        ...state,
        user: action.user,
        error: false
      };
    case actionTypes.LOGGED_IN:
      return {
        ...state,
        user: action.user,
        error: false
      };
    case actionTypes.ADD_ADMIN:
      return {
        ...state,
        message: action.message,
        error: false
      };
    case actionTypes.CONFIRM_PASSWORD:
      return {
        ...state,
        message: action.message,
        error: false
      };
    case actionTypes.PASSWORD_RESET:
      return {
        ...state,
        message: action.message,
        error: false
      };
    case actionTypes.EMAIL_VERIFY:
      return {
        ...state,
        message: action.message,
        error: false
      };
    case actionTypes.USER_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
