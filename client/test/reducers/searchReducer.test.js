import center from '../mocks/center';
import * as actionTypes from '../../src/store/actions/actionsTypes';
import searchReducer from '../../src/store/reducers/searchReducer';

describe('Search Reducer', () => {
  const initialState = {
    searchReuslt: {},
    error: false
  };

  it('should return proper initial state', (done) => {
    expect(searchReducer(undefined, {})).toEqual(initialState);
    done();
  });


  it('should return search result when action of type SEARCH_RESULT is called', (done) => {
    const action = {
      type: actionTypes.SEARCH_RESULT,
      searchReuslt: center.allCenter,
      error: false,
    };
    const newState = searchReducer(initialState, action);
    expect(newState.searchReuslt).toEqual(center.allCenter);
    done();
  });


  it('call action of type CENTER_ERROR when they is an error', (done) => {
    const action = {
      type: actionTypes.SEARCH_ERROR,
      error: true,
    };
    const newState = searchReducer({}, action);
    expect(newState.error).toEqual(true);
    done();
  });
});
