import React from 'react';
import { shallow } from 'enzyme';
import Terms from '../../../src/components/User/termsandcondition';

describe('<Terms />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Terms />);
  });

  it('should render the Terms and condition', () => {
    shallow(<Terms />);
  });

//   it('should render initial layout of Terms', () => {
//     expect(wrapper.getElements()).toMatchSnapshot();
//   });
// //   it('should have one div on layout', () => {
//     expect(wrapper.find('div').length).toEqual(1);
//   });
});
