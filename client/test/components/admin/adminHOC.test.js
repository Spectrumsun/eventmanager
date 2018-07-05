import React from 'react';
import { shallow } from 'enzyme';
import IsAdmin from '../../../src/components/Auth/adminHOC';
import { AddCenter } from '../../../src/components/Center/AddCenter'

const components = IsAdmin(AddCenter);

const { WrappedComponent } = components;


let props;
let mountedComponent;

/**
 * @description Initialise the component
 *
 * @returns {object} ManageRecipe - Mounted component
 */
const getComponent = () => {
  if (!mountedComponent) {
    mountedComponent = shallow(<WrappedComponent {...props} />);
  }
  return mountedComponent;
};

/**
 * @description Initialise the component
 *
 * @returns {object} ManageRecipe - Mounted component
 */

describe('Component: IsAdminenticate Admin', () => {
  beforeEach(() => {
    props = {
      isAuthenticated: true,
      auth: {
        isAuthenticated: true,
        user: {
          id: 1,
          role: 'user'
        }
      },
      history: {
        push: jest.fn()
      }
    };
    mountedComponent = undefined;
  });

  describe('Protected Routes test suite', () => {
    it('Redirects user to homepage they are not Admin', () => {
      props.isAuthenticated = false;
      expect(getComponent()).toMatchSnapshot();
    });
  });
});

