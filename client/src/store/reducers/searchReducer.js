import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  searchReuslt: {},
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_RESULT:
      return {
        ...state,
        searchReuslt: action.searchReuslt,
        error: false
      };
    case actionTypes.SEARCH_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
