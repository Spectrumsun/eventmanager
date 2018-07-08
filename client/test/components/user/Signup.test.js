import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import { createMemoryHistory } from 'history';
import ConnectedSignup,
{ Signup } from '../../../src/components/User/Signup';
import TextField from '../../../src/components/User/TextField'
import Terms from '../../../src/components/User/termsandcondition';


const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  isAuthenticated: false,
  user: {},
};
const store = mockStore(initialState);

const props = {
  onUserCreate: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory()
};

const mountedWrapper = mount(
  <Provider store={store}>
  <BrowserRouter>
    <ConnectedSignup {...props} />
  </BrowserRouter>
  </Provider>
);

const shallowWrapper = shallow(<Signup {...props} />);

const state = {
  fullname: 'ram',
  email: 'ram@goat.com',
  password: '1234678',
  confirmPassword: '12345678',
  formValid: false
};

const state2 = {
  fullname: '',
  email: '',
  password: '',
  confirmPassword: '',
  formValid: true
};

const event = {
  preventDefault: jest.fn(),
  target: {
    email: 'bot@yahoo.com',
    password: '12345678',
  }
};

// let wrapper;

describe('<Signup /> Component', () => {
  it('should render the <Signup />', () => {
    shallow(<Signup />);
  });

  it('should render the <Signup /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('Signup').length).toBe(1);
  });

  it('should have <TextField /> when the page loads', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find(TextField)).toHaveLength(4);
  });

  it('should have <Terms /> when the page loads', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find(Terms)).toHaveLength(1);
  });

  it('should have div on layout', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('div').length).toEqual(13);
  });

  it('should have div on layout', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('button').length).toEqual(3);
  });


  it('should match component snapshot', () => {
    const tree = render.create(
      <BrowserRouter >
        <Signup {...props} />
      </BrowserRouter>);
    expect(tree).toMatchSnapshot();
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

