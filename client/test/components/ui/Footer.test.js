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

  it('should find ul in snapshot', () => {
    expect(wrapper.getElements('ul')).toMatchSnapshot();
  });

  it('should find div in snapshot', () => {
    expect(wrapper.getElements('div')).toMatchSnapshot();
  });

  it('should have one image on layout', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
});
