import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import ConnectedAddEvent,
{ AddEvent, mapDispatchToProps } from '../../../src/components/Event/Addevent';
import EventForm from '../../../src/components/Event/Form/EventForm';


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
    error: false,
    centerName: 'farm center',
  },
  centerName: 'farm center',
};

const store = mockStore(initialState);

const props = {
  onInitCenters: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  page: {
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
    }
  },
  initPostEvent: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory(),
  centerName: 'yaba center'
};

const mountedWrapper = mount(<Provider store={store}>
  <BrowserRouter>
    <ConnectedAddEvent {...props} />
  </BrowserRouter>
</Provider>);

const shallowWrapper = shallow(<AddEvent {...props} />);

const state = {
  name: 'tomato',
  startDate: '2018-12-05',
  endDate: '2018-06-21',
  time: '21:00',
  purpose: 'fun',
  centerId: 1,
  totalPage: '1',
  next: 1,
  centerName: 'yaba center',
  pageNumber: '2',
  formValid: false,
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: 'tomato',
    startDate: '2018-12-05',
    endDate: '2018-06-21',
    time: '21:00',
    purpose: 'fun',
    centerId: 1,
    totalPage: '1',
    next: 1,
    centerName: 'yaba center',
    pageNumber: '2',
    formValid: false,
  }
};

// let wrapper;

describe('<AddEvent /> Component', () => {
  const wrapper = shallow(<AddEvent {...props} />);
  it('should render the <AddEvent />', () => {
    shallow(<AddEvent {...props} />);
  });

  it('should render the <AddEvent /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('AddEvent').length).toBe(1);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedAddEvent {...props} />
        </BrowserRouter>
      </Provider>);
    expect(tree).toMatchSnapshot();
  });


  it('should render initial layout of <AddEvent />', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should have three div on layout', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('should have <EventForm /> when the page loads', () => {
    expect(wrapper.find(EventForm)).toHaveLength(1);
  });

  it('calls onChange event', () => {
    sinon.spy(shallowWrapper.instance(), 'onChange');
    shallowWrapper.instance().onChange(event);
    expect(shallowWrapper.instance().onChange.calledOnce).toEqual(true);
  });

  it('calls onSubmit event', () => {
    sinon.spy(shallowWrapper.instance(), 'onSubmit');
    shallowWrapper.setState(state);
    shallowWrapper.instance().onSubmit(event);
    expect(shallowWrapper.instance().onSubmit.calledOnce).toEqual(true);
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

  it('calls getCenter event', () => {
    sinon.spy(shallowWrapper.instance(), 'getCenter');
    shallowWrapper.setState(state);
    shallowWrapper.instance().getCenter();
    expect(shallowWrapper.instance().getCenter.calledOnce).toEqual(true);
  });

  it('calls selectCenter event', () => {
    sinon.spy(shallowWrapper.instance(), 'selectCenter');
    const details = {
      centerName: 'yaba',
      myCenter: 2
    };
    shallowWrapper.setState(details);
    shallowWrapper.instance().selectCenter();
    expect(shallowWrapper.instance().selectCenter.calledOnce).toEqual(true);
  });

  it('should have div element match snap', () => {
    expect(wrapper.getElements('div')).toMatchSnapshot();
  });


  it('should have three div element', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('ensures that mapDispatchToProps dispatches the specified actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).onInitCenters).toBeTruthy();
  });
});

