import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import ConnectedPasswordReset,
{ PasswordReset } from '../../../src/components/User/PasswordReset';
import TextField from '../../../src/components/User/TextField'


const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  isAuthenticated: false,
  user: {},
};
const store = mockStore(initialState);

const props = {
  initpasswordreset: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory(),
  match: {
    params: {
      token: 'lkjhuiokj'
    }
  }
};

  const mountedWrapper = mount(
    <Provider store={store}>
    <BrowserRouter>
      <ConnectedPasswordReset {...props} />
    </BrowserRouter>
    </Provider>
  );

const shallowWrapper = shallow(<PasswordReset {...props} />);

const state = {
  password: '',
  confirmPassword: '',
};

const event = {
  preventDefault: jest.fn(),
  target: {
    password: '123456789',
    confirmPassword: '123456789',
  }
};


describe('<PasswordReset /> Component', () => {
  it('should render the <Login />', () => {
    shallow(<PasswordReset />);
  });

  it('should render the <PasswordReset /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('PasswordReset').length).toBe(1);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <BrowserRouter >
        <PasswordReset {...props} />
      </BrowserRouter>);
    expect(tree).toMatchSnapshot();
  });


  it('should render initial layout of PasswordReset', () => {
    const wrapper = shallow(<PasswordReset />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have three image on layout', () => {
    const wrapper = shallow(<PasswordReset />);
    expect(wrapper.find('div').length).toEqual(7);
  });

  it('should have three image on layout', () => {
    const wrapper = shallow(<PasswordReset />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should have <TextField /> when the page loads', () => {
    const wrapper = shallow(<PasswordReset />);
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

