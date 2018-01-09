import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  centers: []
};

const reducer = (state = initialState, action) => {
  switch (action.actiontype) {
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
