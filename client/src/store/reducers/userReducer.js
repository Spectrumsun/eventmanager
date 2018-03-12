import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  user: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_USER:
      return {
        ...state,
        user: action.user,
        error: null
      };
    case actionTypes.LOGGED_IN:
      return {
        ...state,
        user: action.user,
        error: null
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
