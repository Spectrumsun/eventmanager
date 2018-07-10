import { createMemoryHistory } from 'history';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import ConnectedNavBar,
{ NavBar, mapDispatchToProps } from '../../../src/components/UI/NavBar';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  auth: {
    isAuthenticated: false,
    user: {}
  }
};

const store = mockStore(initialState);

const props = {
  onLogOut: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  onSearch: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  auth: {
    isAuthenticated: false,
    user: {}
  },
  history: createMemoryHistory()
};

const mountedWrapper = mount(<Provider store={store}>
  <BrowserRouter>
    <ConnectedNavBar {...props} />
  </BrowserRouter>
</Provider>);

const shallowWrapper = shallow(<NavBar {...props} />);

const state = {
  search: ''
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: 'tomato',
    startDate: '2018-12-05',
    endDate: '2018-06-21',
    time: '21:00',
    purpose: 'fun',
    center: 1,
    totalPage: '1',
    next: 1,
    centerName: 'yaba center',
    pageNumber: '2',
    formValid: false,
  }
};

describe('<NavBar /> Component', () => {
  const wrapper = shallow(<NavBar {...props} />);
  it('should render the <NavBar />', () => {
    shallow(<NavBar {...props} />);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedNavBar {...props} />
        </BrowserRouter>
      </Provider>);
    expect(tree).toMatchSnapshot();
  });

  it('should render initial layout of <NavBar />', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should have div on layout', () => {
    expect(wrapper.find('div').length).toEqual(7);
  });

  it('calls onChange event when input is passed to state', () => {
    sinon.spy(shallowWrapper.instance(), 'onChange');
    shallowWrapper.instance().onChange(event);
    expect(shallowWrapper.instance().onChange.calledOnce).toEqual(true);
  });

  it('calls onSubmit event when submit button is clicked', () => {
    sinon.spy(shallowWrapper.instance(), 'onSubmit');
    shallowWrapper.setState(state);
    shallowWrapper.instance().onSubmit(event);
    expect(shallowWrapper.instance().onSubmit.calledOnce).toEqual(true);
  });

  it('calls logout event when the logout button is clicked', () => {
    sinon.spy(shallowWrapper.instance(), 'logout');
    shallowWrapper.setState(state);
    shallowWrapper.instance().logout(event);
    expect(shallowWrapper.instance().logout.calledOnce).toEqual(true);
  });

  it('should have div element match snap', () => {
    expect(wrapper.getElements('div')).toMatchSnapshot();
  });

  it('should have seven div element', () => {
    expect(wrapper.find('div').length).toEqual(7);
  });

  it('should have two ul div element', () => {
    expect(wrapper.find('ul').length).toEqual(2);
  });

  it('ensures that mapDispatchToProps dispatches the specified actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).onSearch).toBeTruthy();
  });
});

