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
{ Signup, mapDispatchToProps } from '../../../src/components/User/Signup';
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

const event = {
  preventDefault: jest.fn(),
  target: {
    email: 'bot@yahoo.com',
    password: '12345678',
  }
};

describe('<Signup /> Component', () => {
  it('should render the <Signup />', () => {
    shallow(<Signup />);
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

  it('should have button on layout', () => {
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

  it('ensures that mapDispatchToProps dispatches the specified actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).onUserCreate).toBeTruthy();
  });

  it('sets error message when trying to submit empty field for name fields', () => {
    const raw = mount(<Signup {...props} />);
    const signIn = raw.find('form');
    signIn.simulate('submit')
    expect(raw.state().errorMessage).toBe('Full Name cannot be blank');
  });

  it('sets error message when trying to submit empty field for email fields', () => {
    const raw = mount(<Signup {...props} />);
    raw.instance().setState({
      fullname: 'tomato',
      email: '',
      password: '',
      confirmPassword: '',
      formValid: false,
      errorMessage: ''
    });
    raw.update();
    raw.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(raw.state().errorMessage).toBe('Email cannot be blank');
  });

  it('sets error message when trying to submit empty space for fullname fields', () => {
    const raw = mount(<Signup {...props} />);
    raw.instance().setState({
      fullname: '   ',
      email: '',
      password: '',
      confirmPassword: '',
      formValid: false,
      errorMessage: ''
    });
    raw.update();
    raw.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(raw.state().errorMessage).toBe('Full Name cannot be white space');
  });


  it('sets error message when trying to submit password less than 6 ', () => {
    const raw = mount(<Signup {...props} />);
    raw.instance().setState({
      fullname: 'ram',
      email: 'tomato@eacple.com',
      password: '1234',
      confirmPassword: '1234',
      formValid: false,
    });
    raw.update();
    raw.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(raw.state().errorMessage).toBe('Password cannot be less than 6 Characters');
  });


  it('sets error message when trying to submit empty password ', () => {
    const raw = mount(<Signup {...props} />);
    raw.instance().setState({
      fullname: 'ram',
      email: 'tomato@eacple.com',
      password: '',
      confirmPassword: '',
      formValid: false,
    });
    raw.update();
    raw.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(raw.state().errorMessage).toBe('Password cannot be blank');
  });

  it('sets error message when trying to password does not match confirm password', () => {
    const raw = mount(<Signup {...props} />);
    raw.instance().setState({
      fullname: 'ram',
      email: 'tomato@eacple.com',
      password: '334343434',
      confirmPassword: '33434343',
      formValid: false,
    });
    raw.update();
    raw.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(raw.state().errorMessage).toBe('Confirm Password dont match Password');
  });

  it('sets error message when trying to password does not match confirm password', () => {
    const raw = mount(<Signup {...props} />);
    raw.instance().setState({
      fullname: 'ram',
      email: 'tomato@eacple.com',
      password: '12345678',
      confirmPassword: '12345678',
      formValid: false,
      errorMessage: ''
    });
    raw.update();
    raw.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(raw.state().formValid).toBe(true);
  });
});