import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  center: [],
  pagination: {},
  searchCenter: {},
  loadedCenter: {},
  newCenter: [],
  editCenter: [],
  deleteCenter: [],
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
    case actionTypes.PAGE_NATION:
      return {
        ...state,
        pagination: action.pagination,
      };
    case actionTypes.SEARCH_RESULT:
      return {
        ...state,
        searchCenter: action.searchCenter,
        error: false
      };
    case actionTypes.GET_SINGLE_CENTER:
      return {
        ...state,
        loadedCenter: action.loadedCenter,
        error: false
      };
    case actionTypes.ADD_CENTER:
      return {
        ...state,
        newCenter: action.newCenter,
        error: false
      };
    case actionTypes.EDIT_CENTER:
      return {
        ...state,
        editCenter: action.editCenter,
        error: false
      };
    case actionTypes.DELETE_CENTER:
      return {
        ...state,
        deleteCenter: action.deleteCenter,
        error: false
      };
    case actionTypes.CENTER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
