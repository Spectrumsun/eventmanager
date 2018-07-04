import center from '../mocks/center';
import * as actionTypes from '../../src/store/actions/actionsTypes';
import centerReducer from '../../src/store/reducers/centerReducer';

describe('Center Reducer', () => {
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

  it('should return proper initial state', (done) => {
    expect(centerReducer(undefined, {})).toEqual(initialState);
    done();
  });

  it('should retrun all centers when action of type GET_ALL_CENTERS is called', (done) => {
    const action = {
      type: actionTypes.GET_ALL_CENTERS,
      center: center.allCenter,
      error: false,
    };
    const newState = centerReducer(initialState, action);
    expect(newState.center).toEqual(center.allCenter);
    done();
  });

  it('should return pagination details when action of type PAGE_NATION is called', (done) => {
    const action = {
      type: actionTypes.PAGE_NATION,
      pagination: center.allCenter,
    };
    const newState = centerReducer(initialState, action);
    expect(newState.pagination).toEqual(center.allCenter);
    done();
  });

  it('should return search result when action of type SEARCH_RESULT is called', (done) => {
    const action = {
      type: actionTypes.SEARCH_RESULT,
      searchCenter: center.allCenter,
      error: false,
    };
    const newState = centerReducer(initialState, action);
    expect(newState.searchCenter).toEqual(center.allCenter);
    done();
  });

  it('should return a single center when action of type GET_SINGLE_CENTER is called', (done) => {
    const action = {
      type: actionTypes.GET_SINGLE_CENTER,
      loadedCenter: center.oneCenter.result,
      error: false,
    };
    const newState = centerReducer(initialState, action);
    expect(newState.loadedCenter).toEqual(center.oneCenter.result);
    done();
  });

  it('should add a new center when action of type ADD_CENTER is called', (done) => {
    const action = {
      type: actionTypes.ADD_CENTER,
      newCenter: center.addCenter,
      error: false,
    };
    const newState = centerReducer(initialState, action);
    expect(newState.newCenter).toEqual(center.addCenter);
    done();
  });

  it('should edit center when action of type EDIT_CENTER is called', (done) => {
    const action = {
      type: actionTypes.EDIT_CENTER,
      editCenter: center.editCenterDetails,
      error: false,
    };
    const newState = centerReducer(initialState, action);
    expect(newState.editCenter).toEqual(center.editCenterDetails);
    done();
  });

  it('should delete center when action of type DELETE_CENTER is called', (done) => {
    const action = {
      type: actionTypes.DELETE_CENTER,
      deleteCenter: center.deleteCenter,
      error: false,
    };
    const newState = centerReducer(initialState, action);
    expect(newState.deleteCenter).toEqual(center.deleteCenter);
    done();
  });

  it('call action of type CENTER_ERROR when they is an error', (done) => {
    const action = {
      type: actionTypes.CENTER_ERROR,
      error: true,
    };
    const newState = centerReducer({}, action);
    expect(newState.error).toEqual(true);
    done();
  });
});
