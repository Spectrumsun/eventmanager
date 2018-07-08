import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../../src/components/UI/Loading';

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loading />);
  });

  it('should render the HomePage', () => {
    shallow(<Loading />);
  });

  it('should render initial layout of HomePage', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have three div on layout', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('should have one image on layout', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });
});
