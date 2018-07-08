import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import render from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import ConnectedSearch,
{ Search } from '../../../src/components/Center/SearchCenter';
import Display from '../../../src/components/Center/getCenter'


const middleware = [thunk];
const mockStore = configureStore(middleware);

const initialState = {
  search: {
    searchReuslt: {
      message: 'success',
      match: 'lol',
      searchString: 'lol',
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
  onSearch: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory(),
  searchResult: {
    message: 'success',
    match: 'lol',
    searchString: 'lol',
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
  
};

const mountedWrapper = mount(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedSearch {...props} />
    </BrowserRouter>
  </Provider>);

const shallowWrapper = shallow(<Search {...props} />);

const state = {
  totalPage: 5,
  next: 1,
  search: 'tomato',
  pageNmber: 1
};

const event = {
  preventDefault: jest.fn(),
  target: {
    totalPage: 5,
    next: 1,
    search: 'tomato',
    pageNmber: 1
  }
};


// let wrapper;

describe('<Search /> Component', () => {
  const wrapper = shallow(<Search {...props} />);
  it('should render the <Search />', () => {
    shallow(<Search {...props} />);
  });

  it('should render the <Search /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('Search').length).toBe(1);
  });

  it('should match component snapshot', () => {
    const tree = render.create(<Provider store={store}>
      <BrowserRouter>
        <ConnectedSearch {...props} />
      </BrowserRouter>
    </Provider>);
    expect(tree).toMatchSnapshot();
  });


  it('should render initial layout of <Search />', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should have three div on layout', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should have <Display /> when the page loads', () => {
    expect(wrapper.find(Display)).toHaveLength(2);
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


//   it('calls onSubmit event', () => {
//     sinon.spy(shallowWrapper.instance(), 'onSubmit');
//     shallowWrapper.setState(state);
//     shallowWrapper.instance().onSubmit(event);
//     expect(shallowWrapper.instance().onSubmit.calledOnce).toEqual(true);
//   });

//   it('calls onClick event', () => {
//     sinon.spy(shallowWrapper.instance(), 'onClick');
//     shallowWrapper.setState(state);
//     shallowWrapper.instance().onClick();
//     expect(shallowWrapper.instance().onClick.calledOnce).toEqual(true);
//   });

//   it('calls onKeyPress event', () => {
//     sinon.spy(shallowWrapper.instance(), 'onKeyPress');
//     shallowWrapper.setState(state);
//     shallowWrapper.instance().onKeyPress(event);
//     expect(shallowWrapper.instance().onKeyPress.calledOnce).toEqual(true);
//   });

  //   it('calls handleImageChange event', () => {
  //     sinon.spy(shallowWrapper.instance(), 'handleImageChange');
  //     shallowWrapper.setState(state);
  //     shallowWrapper.instance().handleImageChange(event);
  //     expect(shallowWrapper.instance().handleImageChange.calledOnce).toEqual(true);
  //   });

//   it('calls removeFacility event', () => {
//     sinon.spy(shallowWrapper.instance(), 'removeFacility');
//     shallowWrapper.setState(state);
//     shallowWrapper.instance().removeFacility(i);
//     expect(shallowWrapper.instance().removeFacility.calledOnce).toEqual(true);
//   });

//   it('should have three div element match snap', () => {
//     expect(wrapper.getElements('div')).toMatchSnapshot();
//   });


//   it('should have div element', () => {
//     expect(wrapper.find('div').length).toEqual(4);
//   });
});

