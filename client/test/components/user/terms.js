import React from 'react';
import { shallow } from 'enzyme';
import Terms from '../../../src/components/User/termsandcondition';

describe('<Terms />', () => {
  beforeEach(() => {
    shallow(<Terms />);
  });

  it('should render the Terms and condition component', () => {
    shallow(<Terms />);
  });
});
