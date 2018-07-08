import React from 'react';
import { shallow } from 'enzyme';
import Display from '../../../src/components/Event/getEvent';

const props = {
  eventName: 'tome',
  startDate: '2018-10-10',
  endDate: '2018-11-12',
  purpose: 'lol',
  centerImage: 'http://lol/com',
};

describe('<Display />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Display {...props} />);
  });

  it('should render the Display', () => {
    shallow(<Display {...props} />);
  });

  it('should render initial layout of Display', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have image on layout', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
});
