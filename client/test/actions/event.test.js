import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../../src/store/actions/actionsTypes';
import * as action from '../../src/store/actions/index';
import events from '../mocks/event';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Test for Event action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatch action GET_ALL_EVENT to get all events', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: events.allEvent,
      });
    });
    const expectedActions = [
      {
        type: actionTypes.GET_ALL_EVENT,
        events: events.allEvent.event
      }

    ];
    const store = mockStore({});

    return store.dispatch(action.initEvents(events.allEvent))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action GET_SINGLE_EVENT to get one events', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: events.oneEvent,
      });
    });
    const expectedActions = [
      {
        type: actionTypes.GET_SINGLE_EVENT,
        loadEvent: events.oneEvent.event
      }
    ];
    const store = mockStore({});

    return store.dispatch(action.initGetOneEvent(events.allEvent))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action ADD_EVENT to add an event', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: events.addEvent,
      });
    });
    const expectedActions = [
      {
        type: actionTypes.ADD_EVENT,
        addEvent: events.addEvent
      }
    ];
    const store = mockStore({});
    const history = createMemoryHistory('/events');

    return store.dispatch(action.initPostEvent(events.addEvent, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action EDIT_CENTER to edit an event', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: events.editEventResponse,
      });
    });
    const expectedActions = [
      {
        type: actionTypes.EDIT_CENTER,
        editCenter: events.editEvent.event
      }
    ];
    const store = mockStore({});
    const history = createMemoryHistory('/events');

    return store.dispatch(action.initEditCenter(2, events.editEvent, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action DELETE_EVENT to delete an event', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: events.deleteEvent
      });
    });
    const expectedActions = [
      {
        type: actionTypes.DELETE_EVENT,
        deleteEvent: events.deleteEvent
      }
    ];
    const store = mockStore({});
    const history = createMemoryHistory('/events');

    return store.dispatch(action.initDeleteEvent(2, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action EVENT_ERROR to return error', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: events.error
      });
    });
    const expectedActions = [
      {
        type: actionTypes.EVENT_ERROR,
        error: events.error
      }
    ];
    const store = mockStore({});
    store.dispatch(action.eventError(events.error));
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});

