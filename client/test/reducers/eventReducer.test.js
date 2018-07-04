import events from '../mocks/event';
import * as actionTypes from '../../src/store/actions/actionsTypes';
import eventReducer from '../../src/store/reducers/eventReducer';

describe('Event Reducer', () => {
  const initialState = {
    events: [],
    loadedEvent: {},
    addEvent: [],
    editEvent: [],
    deleteEvent: [],
    error: false
  };

  it('should return proper initial state', (done) => {
    expect(eventReducer(undefined, {})).toEqual(initialState);
    done();
  });

  it('should return all events when action of type GET_ALL_EVENT is called', (done) => {
    const action = {
      type: actionTypes.GET_ALL_EVENT,
      center: events.allEvent,
      error: false,
    };
    const newState = eventReducer(initialState, action);
    expect(newState.center).toEqual(events.allCenter);
    done();
  });

  it('should return one Event when action of type GET_SINGLE_EVENT is called', (done) => {
    const action = {
      type: actionTypes.GET_SINGLE_EVENT,
      loadedEvent: events.oneEvent,
      error: false,
    };
    const newState = eventReducer(initialState, action);
    expect(newState.events).toEqual([]);
    done();
  });

  it('should add event when action of type ADD_EVENT is called', (done) => {
    const action = {
      type: actionTypes.ADD_EVENT,
      addEvent: events.addEvent,
      error: false,
    };
    const newState = eventReducer(initialState, action);
    expect(newState.addEvent).toEqual(events.addEvent);
    done();
  });

  it('should edit center when action of type EDIT_CENTER is called', (done) => {
    const action = {
      type: actionTypes.EDIT_EVENT,
      editEvent: events.editEvent,
      error: false,
    };
    const newState = eventReducer(initialState, action);
    expect(newState.editEvent).toEqual(events.editEvent);
    done();
  });

  it('should delete event when action of type DELETE_EVENT is called', (done) => {
    const action = {
      type: actionTypes.DELETE_EVENT,
      deleteEvent: events.deleteEvent,
      error: false,
    };
    const newState = eventReducer(initialState, action);
    expect(newState.deleteEvent).toEqual(events.deleteEvent);
    done();
  });

  it('call action of type EVENT_ERROR when they is an error', (done) => {
    const action = {
      type: actionTypes.EVENT_ERROR,
      error: true,
    };
    const newState = eventReducer({}, action);
    expect(newState.error).toEqual(true);
    done();
  });
});
