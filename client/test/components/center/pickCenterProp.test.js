import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import Display from '../../../src/components/Center/pickCenterProp';

const props = {
  selectCenter: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  error: false,
  history: createMemoryHistory(),
  center: [
    {
      id: 29,
      centerName: 'farm center',
      city: 'Yaba',
      address: 'No 33, yaba road lagos',
      availability: 'yes',
      imageurl: 'llal',
      imageId: 'lol',
      about: 'lalalla',
      facility: ['car', 'fan', 'video']
    },
    {
      id: 9,
      centerName: 'farm center',
      city: 'Yaba',
      address: 'No 33, yaba road lagos',
      availability: 'yes',
      imageurl: 'llal',
      imageId: 'lol',
      about: 'lalalla',
      facility: ['car', 'fan', 'video']
    }
  ],
  page: 2,
  facility: ['car', 'fan', 'video'],
  id: 9,
  centerName: 'farm center',
  address: 'No 33, yaba road lagos',
  image: 'llal'
};

const shallowWrapper = shallow(<Display {...props} />);

describe('<Display />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Display {...props} />);
  });

  it('should render the HomePage', () => {
    shallow(<Display {...props} />);
  });

  it('should render initial layout of Display', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have image on layout', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should call clicked method when sending the event id to the event state', () => {
    sinon.spy(shallowWrapper.instance(), 'clicked');
    shallowWrapper.instance().clicked();
    expect(shallowWrapper.instance().clicked.calledOnce).toEqual(true);
  });
});
