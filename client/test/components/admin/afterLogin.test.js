import React from 'react';
import { shallow } from 'enzyme';
import Authenticate from '../../../src/components/Auth/afterLogin';
import { Login } from '../../../src/components/User/Login'

const components = Authenticate(Login);

const { WrappedComponent } = components;


let props;
let mountedComponent;

const getComponent = () => {
  if (!mountedComponent) {
    mountedComponent = shallow(<WrappedComponent {...props} />);
  }
  return mountedComponent;
};

describe('Component:  isAuthenticated User', () => {
  beforeEach(() => {
    props = {
      auth: {
        isAuthenticated: true,
        user: {
          id: 'jame',
          role: 'user'
        },
      },
      history: {
        push: jest.fn()
      }
    };
    mountedComponent = undefined;
  });

  describe('Protected Login Page after logging in test suite', () => {
    it('Redirects user to homepage if they access rhe login page after logging in', () => {
      props.isAuthenticated = true;
      expect(getComponent()).toMatchSnapshot();
    });
  });
});

