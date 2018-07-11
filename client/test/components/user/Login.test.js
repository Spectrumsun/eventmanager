import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import render from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import sinon from 'sinon';
import { Login, mapDispatchToProps } from '../../../src/components/User/Login';
import TextField from '../../../src/components/User/TextField';

jest.mock('react-router-dom');

const props = {
  initUserLogin: () => Promise.resolve(),
  history: createMemoryHistory(),
};



const shallowWrapper = shallow(<Login {...props} />);

const state = {
  email: 'bot@yahoo.com',
  Password: '12345678',
  error: ''
};

const event = {
  preventDefault: jest.fn(),
  target: {
    email: 'bot@yahoo.com',
    password: '12345678',
  }
};

describe('<Login /> Component', () => {
  it('should render the <Login />', () => {
    shallow(<Login />);
  });

  it('should match component snapshot', () => {
    const tree = render.create(<BrowserRouter >
        <Login {...props} />
      </BrowserRouter>);
    expect(tree).toMatchSnapshot();
  });


  it('should render initial layout of HomePage', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should have div on layout', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div').length).toEqual(7);
  });

  it('should have a form on the component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should have <TextField /> when the page loads', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(TextField)).toHaveLength(2);
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
    expect(mapDispatchToProps(dispatch).initUserLogin).toBeTruthy();
  });
});

