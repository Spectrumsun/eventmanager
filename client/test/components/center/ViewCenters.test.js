import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import ConnectedCenters,
{ Centers } from '../../../src/components/Center/ViewCenters';
import Footer from '../../../src/components//UI/Footer'

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  centers: {
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
    pagination: {
      message: 'success',
      result: [
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
      count: 10,
      pages: 2
    },
    error: false
  }
};

const store = mockStore(initialState);

const props = {
  onInitCenters: sinon.spy(() => new Promise((cb) => {
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
  page: {
    message: 'success',
    result: [
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
    count: 10,
    pages: 2
  },
};

const mountedWrapper = mount(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedCenters {...props} />
    </BrowserRouter>
  </Provider>);

const state = {
  totalPage: 5,
  next: 1,
  search: 'rrr',
  pageNmber: 1
};
  

const shallowWrapper = shallow(<Centers {...props} />);


describe('<Centers /> Component', () => {
  const wrapper = shallow(<Centers {...props} />);
  it('should render the <Centers />', () => {
    shallow(<Centers {...props} />);
  });

  it('should render the <Centers /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('Centers').length).toBe(1);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedCenters {...props} />
        </BrowserRouter>
      </Provider>);
    expect(tree).toMatchSnapshot();
  });


  it('should render initial layout of <Centers />', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should have three div on layout', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('should have h1 on layout', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should have ul on layout', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should have three li on layout', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });

  it('should have <EventForm /> when the page loads', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('calls add event', () => {
    sinon.spy(shallowWrapper.instance(), 'add');
    shallowWrapper.setState(state);
    shallowWrapper.instance().add();
    expect(shallowWrapper.instance().add.calledOnce).toEqual(true);
  });

  it('calls minus event', () => {
    sinon.spy(shallowWrapper.instance(), 'minus');
    shallowWrapper.setState(state);
    shallowWrapper.instance().minus();
    expect(shallowWrapper.instance().minus.calledOnce).toEqual(true);
  });
});

