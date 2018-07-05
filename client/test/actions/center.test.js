import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../../src/store/actions/actionsTypes';
import * as action from '../../src/store/actions/index';
import center from '../mocks/center';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Test for Center action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatch action GET_ALL_CENTERS to get all centers', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: center.allCenter,
      });
    });
    const expectedActions = [
      {
        type: actionTypes.GET_ALL_CENTERS,
        center: center.allCenter.result
      },
      {
        type: actionTypes.PAGE_NATION,
        pagination: center.allCenter
      }

    ];
    const store = mockStore({});

    return store.dispatch(action.initCenters(center.allCenter))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action GET_SINGLE_CENTER to get one center', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: center.oneCenter,
      });
    });
    const expectedActions = [
      {
        type: actionTypes.GET_SINGLE_CENTER,
        loadedCenter: center.oneCenter.center
      }
    ];
    const store = mockStore({});

    return store.dispatch(action.getOneCenter(center.oneCenter))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action ADD_CENTER to add a center', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: center.addedCenter,
      });
    });
    const expectedActions = [
      {
        type: actionTypes.ADD_CENTER,
        newCenter: center.addedCenter.message
      }
    ];
    const store = mockStore({});
    const history = createMemoryHistory('/centers');

    return store.dispatch(action.initPostCenters(center.addCenter, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action EDIT_CENTER to edit a center', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: center.updatedCenter,
      });
    });
    const expectedActions = [
      {
        type: actionTypes.EDIT_CENTER,
        editCenter: center.updatedCenter.updatedCenter
      }
    ];
    const store = mockStore({});
    const history = createMemoryHistory('/centers');

    return store.dispatch(action.initEditCenter(2, center.editCenterDetails, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action DELETE_CENTER to delete a center', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: center.deleteCenter
      });
    });
    const expectedActions = [
      {
        type: actionTypes.DELETE_CENTER,
        deleteCenter: center.deleteCenter.deletedCenter
      }
    ];
    const store = mockStore({});
    const history = createMemoryHistory('/centers');

    return store.dispatch(action.initDeleteCenter(2, history))
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
        type: actionTypes.CENTER_ERROR,
        error: center.error
      }
    ];
    const store = mockStore({});
    store.dispatch(action.centerError(center.error));
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});

