import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import ConnectedEventInfo,
{ EventInfo } from '../../../src/components/Event/EventInfo';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  events: {
    loadedEvent: {
      name: 'tom',
      startDate: '2018-10-20',
      endDate: '2018-10-23',
      time: '10:00',
      purpose: 'for test',
      center: 1,
    },
    error: false
  },
  match: {
    params: {
      id: '1'
    }
  },
  auth: {
    isAuthenticated: false,
    user: {}
  }
};

const store = mockStore(initialState);

const props = {
  onOneEvent: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  onDeleteEvent: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  page: {
    pages: 5
  },
  initPostEvent: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  loadedEvent: {
    name: 'tom',
    startDate: '2018-10-20',
    endDate: '2018-10-23',
    time: '10:00',
    purpose: 'for test',
    center: 1,
  },
  error: false,
  match: {
    params: {
      id: '1'
    }
  },
  auth: {
    isAuthenticated: false,
    user: {}
  },
  history: createMemoryHistory()
};

const mountedWrapper = mount(<Provider store={store}>
  <BrowserRouter>
    <ConnectedEventInfo {...props} />
  </BrowserRouter>
</Provider>);

const shallowWrapper = shallow(<EventInfo {...props} />);


const event = {
  preventDefault: jest.fn(),
  target: {
    name: 'tomato',
    startDate: '2018-12-05',
    endDate: '2018-06-21',
    time: '21:00',
    purpose: 'fun',
    centerId: 1,
    totalPage: '1',
    next: 1,
    centerName: 'yaba center',
    pageNumber: '2',
    formValid: false,
  }
};

// let wrapper;

describe('<EventInfo /> Component', () => {
  const wrapper = shallow(<EventInfo {...props} />);
  it('should render the <EventInfo />', () => {
    shallow(<EventInfo {...props} />);
  });

  it('should render the <EventInfo /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('EventInfo').length).toBe(1);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedEventInfo {...props} />
        </BrowserRouter>
      </Provider>);
    expect(tree).toMatchSnapshot();
  });


  it('should render initial layout of <EventInfo />', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });


  it('calls deleteEvent event', () => {
    sinon.spy(shallowWrapper.instance(), 'deleteEvent');
    shallowWrapper.instance().deleteEvent(event);
    expect(shallowWrapper.instance().deleteEvent.calledOnce).toEqual(true);
  });

  it('should have three div element match snap', () => {
    expect(wrapper.getElements('div')).toMatchSnapshot();
  });


  it('should have one div element', () => {
    expect(wrapper.find('div').length).toEqual(7);
  });
});

