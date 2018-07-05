import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../src/components/UI/Footer';

describe('<Footer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('should render the footer', () => {
    shallow(<Footer />);
  });

  it('should render initial layout of footer', () => {
    expect(wrapper.getElements('ul')).toMatchSnapshot();
  });

  it('should render initial layout of footer', () => {
    expect(wrapper.getElements('div')).toMatchSnapshot();
  });

  it('should have one image on layout', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
});
