import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import ConnectedViewEvent,
{
  ViewEvent,
  mapDispatchToProps } from '../../../src/components/Event/ViewEvents';
import Display from '../../../src/components/Event/getEvent'


const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  events: {
    events: [{
      id: 10,
      eventName: 'tom',
      startDate: '2018-10-12',
      endDate: '2018-10-15',
      purpose: 'test',
      centers: {
        id: 100,
        imageurl: 'https:image.com/gif'
      }
    }],
    error: false
  }
};

const store = mockStore(initialState);

const props = {
  onInitEvent: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  error: false,
  history: createMemoryHistory(),
  events: [{
    id: 10,
    eventName: 'tom',
    startDate: '2018-10-12',
    endDate: '2018-10-15',
    purpose: 'test',
    centers: {
      id: 101,
      imageurl: 'https:image.com/gif'
    }
  }],
};

describe('<ViewEvent /> Component', () => {
  const wrapper = shallow(<ViewEvent {...props} />);
  it('should render the <ViewEvent />', () => {
    shallow(<ViewEvent {...props} />);
  });


  it('should match component snapshot', () => {
    const tree = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedViewEvent {...props} />
        </BrowserRouter>
      </Provider>);
    expect(tree).toMatchSnapshot();
  });

  it('should render initial layout of <ViewEvent />', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should have div on layout', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should have <Event /> when the page loads', () => {
    expect(wrapper.find(Display)).toHaveLength(1);
  });

  it('ensures that mapDispatchToProps dispatches the specified actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).onInitEvent).toBeTruthy();
  });
});

