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
    case actionTypes.EDIT_EVENT: {
      const updatedItems = state.events.map((item) => {
        if (item.id === action.editEvent.id) {
          return { ...item, ...action.editEvent };
        }
        return item;
      });
      return {
        ...state,
        editEvent: updatedItems,
        error: false
      };}
    case actionTypes.DELETE_EVENT: {
      return {
        ...state,
        deleteEvent: state.events.filter(events => events.id !== action.deleteEvent.id),
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
