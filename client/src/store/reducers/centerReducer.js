import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  center: [],
  loadedCenter: [],
  error: false

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CENTERS:
      return {
        ...state,
        center: action.center,
        error: false
      };
    case actionTypes.GET_SINGLE_CENTER:
      return {
        ...state,
        loadedCenter: action.loadedCenter,
        error: false
      };
    case actionTypes.CENTER_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
