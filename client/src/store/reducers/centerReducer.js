import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  center: [],
  error: 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CENTERS:
      return {
        ...state,
        center: action.center
      };
    default:
      return state;
  }
};

export default reducer;
