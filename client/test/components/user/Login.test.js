import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import ConnectedLogin,
{ Login } from '../../../src/components/User/Login';
import TextField from '../../../src/components/User/TextField';


const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  isAuthenticated: false,
  user: {},
};
const store = mockStore(initialState);

const props = {
  initUserLogin: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory()
};

const mountedWrapper = mount(
  <Provider store={store}>
  <BrowserRouter>
    <ConnectedLogin {...props} />
  </BrowserRouter>
  </Provider>
);

const shallowWrapper = shallow(<Login {...props} />);

const state = {
  email: 'bot@yahoo.com',
  Password: '12345678',
};

const event = {
  preventDefault: jest.fn(),
  target: {
    email: 'bot@yahoo.com',
    password: '12345678',
  }
};

// let wrapper;

describe('<Login /> Component', () => {
  it('should render the <Login />', () => {
    shallow(<Login />);
  });

  it('should render the <Login /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('Login').length).toBe(1);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <BrowserRouter >
        <Login {...props} />
      </BrowserRouter>);
    expect(tree).toMatchSnapshot();
  });


  it('should render initial layout of HomePage', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have three image on layout', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div').length).toEqual(7);
  });

  it('should have form ', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should have <TextField /> when the page loads', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(TextField)).toHaveLength(2);
  });

  it('calls onChange event', () => {
    sinon.spy(shallowWrapper.instance(), 'onChange');
    shallowWrapper.instance().onChange(event);
    expect(shallowWrapper.instance().onChange.calledOnce).toEqual(true);
  });

  it('calls onSubmit event', () => {
    sinon.spy(shallowWrapper.instance(), 'onSubmit');
    shallowWrapper.setState(state);
    shallowWrapper.instance().onSubmit(event);
    expect(shallowWrapper.instance().onSubmit.calledOnce).toEqual(true);
  });
});

