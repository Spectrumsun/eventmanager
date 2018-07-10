import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import ConnectedForgotPassword,
{ ForgotPassword } from '../../../src/components/User/ForgotPassword';
import TextField from '../../../src/components/User/TextField'

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  isAuthenticated: false,
  user: {},
};
const store = mockStore(initialState);

const props = {
  initconfirmPassword: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory(),
  type: 'PropTypes.string.isRequired',
  value:' PropTypes.string.isRequired',
  onChange: () => {},
  name: 'PropTypes.string.isRequired',
  label: 'PropTypes.string.isRequired',
  placeholder: 'PropTypes.string.isRequired'
};

const mountedWrapper = mount(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedForgotPassword {...props} />
    </BrowserRouter>
  </Provider>
);

const shallowWrapper = shallow(<ForgotPassword {...props} />);

const state = {
  email: 'bot@yahoo.com',
};

const event = {
  preventDefault: jest.fn(),
  target: {
    email: 'bot@yahoo.com',
  }
};

describe('<ForgotPassword /> Component', () => {
  it('should render the <Login />', () => {
    shallow(<ForgotPassword />);
  });

  it('should render the <ForgotPassword /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('ForgotPassword').length).toBe(1);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <BrowserRouter >
        <ForgotPassword {...props} />
      </BrowserRouter>);
    expect(tree).toMatchSnapshot();
  });

  it('should render initial layout of ForgotPassword', () => {
    const wrapper = shallow(<ForgotPassword />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have three image on layout', () => {
    const wrapper = shallow(<ForgotPassword />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should have <TextField /> when the page loads', () => {
    const wrapper = shallow(<ForgotPassword />);
    expect(wrapper.find(TextField)).toHaveLength(1);
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
});
