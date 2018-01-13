import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  token: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (actionTypes) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        error: null
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error
      };
    default: return state;
  }
};


export default reducer;
