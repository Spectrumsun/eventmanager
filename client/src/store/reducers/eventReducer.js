import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  event: [],
  loadedEvent: [],
  error: false

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_EVENT:
      return {
        ...state,
        event: action.event,
        error: false
      };
    case actionTypes.GET_SINGLE_EVENT:
      return {
        ...state,
        loadedEvent: action.loadedEvent,
        error: false
      };
    case actionTypes.EVENT_ERROR:
      return {
        ...state,
        error: action.event
      };
    default:
      return state;
  }
};

export default reducer;
