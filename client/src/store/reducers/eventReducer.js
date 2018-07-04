import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  events: [],
  loadedEvent: {},
  addEvent: [],
  editEvent: [],
  deleteEvent: [],
  error: false

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_EVENT:
      return {
        ...state,
        events: action.events,
        error: false
      };
    case actionTypes.GET_SINGLE_EVENT:
      return {
        ...state,
        loadedEvent: action.loadEvent,
        error: false
      };
    case actionTypes.ADD_EVENT:
      return {
        ...state,
        addEvent: action.addEvent,
        error: false
      };
    case actionTypes.EDIT_EVENT:
      return {
        ...state,
        editEvent: action.editEvent,
        error: false
      };
    case actionTypes.DELETE_EVENT: {
      return {
        ...state,
        deleteEvent: action.deleteEvent,
        error: false,
      };
    }
    case actionTypes.EVENT_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
