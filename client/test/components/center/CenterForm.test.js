import React from 'react';
import { shallow } from 'enzyme';
import CenterForm from '../../../src/components/Center/Form/CenterForm';

const props = {
  facility: ['car', 'table', 'fan'],
  onSubmit: () => { console.log('hi'); },
  onClick: () => { console.log('hi'); },
  onChange: () => { console.log('hi'); },
  progress: '100',
  about: 'olo',
  handleImageChange: () => { console.log('hi'); },
  name: 'tomato',
  city: 'lagos',
  availability: 'yes',
  address: 'no 22 yaba road',
  values: 'lolol',
  image: 'uyu',
  id: 1
};

describe('<CenterForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CenterForm {...props} />);
  });

  it('should render the CenterForm', () => {
    shallow(<CenterForm {...props}  />);
  });

  it('should render initial layout of CenterForm', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have div on layout', () => {
    expect(wrapper.find('div').length).toEqual(11);
  });

  it('should have  input on layout', () => {
    expect(wrapper.find('input').length).toEqual(7);
  });


  it('should have h5 on layout', () => {
    expect(wrapper.find('h5').length).toEqual(7);
  });

  it('should have ui on layout', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should have li on layout', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });
;

  it('should have three button on layout', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
