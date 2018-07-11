import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import ConnectedCenterInfo,
{ CenterInfo } from '../../../src/components/Center/CenterInfo';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  centers: {
    loadedCenter: {
      centerName: 'farm center',
      city: 'Yaba',
      id: 20,
      address: 'No 33, yaba road lagos',
      availability: 'yes',
      imageurl: 'https://res.96295052-uueqqqc5ey6gzmjel0ft.jpg.jpg',
      imageId: 'even052-uueqqqc5ey6gzmjel0ft.jpg',
      about: 'lalalla',
      facility: ['house', 'horuse', 'car'],
      events: [
        { startDate: '2018-11-09', endDate: '2018-10-22' },
        { startDate: '2018-11-09', endDate: '2018-10-22' }
      ]
    }
  },
  match: {
    params: {
      id: 1
    }
  },
  auth: {
    isAuthenticated: true,
    user: {
      id: 1,
      fullname: 'tomato',
      role: 'user'
    }
  },
  error: false
};

const store = mockStore(initialState);

const props = {
  onDeleteCenter: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  onFetOneCenters: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  loadedCenter: {
    centers: {
      loadedCenter: {
        centerName: 'farm center',
        city: 'Yaba',
        id: 20,
        address: 'No 33, yaba road lagos',
        availability: 'yes',
        imageurl: 'https://res.96295052-uueqqqc5ey6gzmjel0ft.jpg.jpg',
        imageId: 'even052-uueqqqc5ey6gzmjel0ft.jpg',
        about: 'lalalla',
        facility: ['house', 'horuse', 'car'],
        events: [
          { startDate: '2018-11-09', endDate: '2018-10-22' },
          { startDate: '2018-11-09', endDate: '2018-10-22' }
        ]
      }
    }
  },
  match: {
    params: {
      id: '1'
    }
  },
  auth: {
    isAuthenticated: false,
    user: {
      id: 1,
      fullname: 'tomato',
      role: 'user'
    }
  },
  history: createMemoryHistory(),
  error: false
};


const shallowWrapper = shallow(<CenterInfo {...props} />);

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

describe('<CenterInfo /> Component', () => {
  const wrapper = shallow(<CenterInfo {...props} />);
  it('should render the <CenterInfo />', () => {
    shallow(<CenterInfo {...props} />);
  });


  it('should match component snapshot', () => {
    const tree = render.create(<Provider store={store}>
      <BrowserRouter>
        <ConnectedCenterInfo {...props} />
      </BrowserRouter>
    </Provider>);
    expect(tree).toMatchSnapshot();
  });

  it('should render initial layout of <CenterInfo />', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('calls deleteCenter event', () => {
    sinon.spy(shallowWrapper.instance(), 'deleteCenter');
    shallowWrapper.instance().deleteCenter(event);
    expect(shallowWrapper.instance().deleteCenter.calledOnce).toEqual(true);
  });

  it('should have div element match snap', () => {
    expect(wrapper.getElements('div')).toMatchSnapshot();
  });

  it('should have div element', () => {
    expect(wrapper.find('div').length).toEqual(6);
  });
});

