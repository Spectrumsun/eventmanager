import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import render from 'react-test-renderer';
import sinon from 'sinon';
import { createMemoryHistory } from 'history';
import
{ PasswordReset } from '../../../src/components/User/PasswordReset';
import TextField from '../../../src/components/User/TextField'

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
  
  it('should have div on layout', () => {
    const wrapper = shallow(<PasswordReset />);
    expect(wrapper.find('div').length).toEqual(7);
  });

  it('should have form on layout', () => {
    const wrapper = shallow(<PasswordReset />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should have <TextField /> when the page loads', () => {
    const wrapper = shallow(<PasswordReset />);
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
});

