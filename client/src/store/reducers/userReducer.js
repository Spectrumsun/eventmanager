import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  user: [],
  token: null,
  error: null

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_USER:
      return {
        ...state,
        user: action.user,
        token: null,
        error: null
      };
    case actionTypes.LOGGED_IN:
      return {
        ...state,
        user: action.user,
        token: action.token,
        error: null
      };
    case actionTypes.USER_ERROR:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.LOGGED_OUT:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

export default reducer;
