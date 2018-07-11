import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import render from 'react-test-renderer';
import sinon from 'sinon';
import { createMemoryHistory } from 'history';
import { Signup, mapDispatchToProps } from '../../../src/components/User/Signup';
import TextField from '../../../src/components/User/TextField'
import Terms from '../../../src/components/User/termsandcondition';

const props = {
  onUserCreate: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory()
};

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
});
