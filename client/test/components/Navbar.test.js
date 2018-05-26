import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../src/components/UI/NavBar';

describe('<NavBar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('should render the NavBar', () => {
    shallow(<NavBar />);
  });

  it('should render initial layout of NavBar', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should render three <Navbar /> element if authenticated', () => {
    wrapper.setProps({ isAuthenticated: false });
    expect(wrapper.contains(<NavBar />)).toEqual(false);
  });
});

