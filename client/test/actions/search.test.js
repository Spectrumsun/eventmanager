import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../../src/store/actions/actionsTypes';
import * as action from '../../src/store/actions/index';
import center from '../mocks/center';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Test for Search action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatch action SEARCH_RESULT to return search', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: center.oneCenter,
      });
    });
    const expectedActions = [
      {
        type: actionTypes.SEARCH_RESULT,
        searchReuslt: center.oneCenter
      },
    ];
    const store = mockStore({});

    return store.dispatch(action.initSearchCenters(center.allCenter))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action CENTER_ERROR to return error', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: center.error
      });
    });
    const expectedActions = [
      {
        type: actionTypes.SEARCH_ERROR,
        error: center.error
      }
    ];
    const store = mockStore({});
    store.dispatch(action.searchError(center.error));
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});

