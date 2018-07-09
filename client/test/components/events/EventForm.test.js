import React from 'react';
import { shallow } from 'enzyme';
import EventForm from '../../../src/components/Event/Form/EventForm';
import PickCenter from '../../../src/components/Center/PickCenter'

const props = {
  facility: ['car', 'table', 'fan'],
  onSubmit: () => { console.log('hi'); },
  onClick: () => { console.log('hi'); },
  onChange: () => { console.log('hi'); },
  selectCenter: () => { console.log('hi'); },
  getCenter: () => { console.log('hi'); },
  formValid: true,
  name: 'tomato',
  numberOfPages: { total: 2 },
  numberOfPages1: { page: 2 },
  centerName: 'yaba',
  availability: 'yes',
  startDate: '2018-12-09',
  endDate: '2018-12-10',
  time: 'uyu',
  id: 1,
  showCenterNane: 'iiir'
};

describe('<EventForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EventForm {...props} />);
  });

  it('should render the HomePage', () => {
    shallow(<EventForm {...props} />);
  });

  it('should render initial layout of HomePage', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have div on layout', () => {
    expect(wrapper.find('div').length).toEqual(11);
  });

  it('should have  input on layout', () => {
    expect(wrapper.find('input').length).toEqual(4);
  });


  it('should have h5 on layout', () => {
    expect(wrapper.find('h5').length).toEqual(5);
  });

  it('should have ui on layout', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should have li on layout', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('should have <EventForm /> when the page loads', () => {
    expect(wrapper.find(PickCenter)).toHaveLength(1);
  });

  it('should have two image on layout', () => {
    expect(wrapper.find('button').length).toEqual(2);
  });
});
