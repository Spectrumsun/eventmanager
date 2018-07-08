import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../src/components/UI/Home';

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render the HomePage', () => {
    shallow(<Home />);
  });

  it('should render initial layout of HomePage', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have three image on layout', () => {
    expect(wrapper.find('img').length).toEqual(3);
  });
});
