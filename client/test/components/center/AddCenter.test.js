import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import ConnectedAddCenter,
{ AddCenter } from '../../../src/components/Center/AddCenter';
import CenterFrom from '../../../src/components/Center/Form/CenterForm';


const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  centers: {
    pagination: {
      message: 'success',
      result: [
        {
          id: 29,
          centerName: 'farm center',
          serId: 1
        }
      ],
      count: 10,
      pages: 2
    }
  }
};

const store = mockStore(initialState);

const props = {
  initPostCenters: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory()
};

const mountedWrapper = mount(  
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedAddCenter {...props} />
    </BrowserRouter>
  </Provider>);

const shallowWrapper = shallow(<AddCenter {...props} />);

const state = {
  name: 'yaba',
  city: 'lagos',
  address: 'nO 22 yaba',
  about: 'lol',
  availability: 'yes',
  values: 'table',
  facility: ['car, egg'],
  image: 'http://wwww.image.com/png',
  preview: 'folder/image',
  imageurl: 'http://wwww.image.com/png',
  publicUrlId: 'png',
  progress: `${0}%`,
  formValid: false,
};


const event = {
  preventDefault: jest.fn(),
  target: {
    name: 'yaba',
    city: 'lagos',
    address: 'nO 22 yaba',
    about: 'lol',
    availability: 'yes',
    values: 'table',
    facility: ['car, egg'],
    image: 'erere',
    preview: 'folder/image',
    imageurl: 'http://wwww.image.com/png',
    publicUrlId: 'png',
    progress: `${0}%`,
    formValid: false,
    files: '3'
  }
};

const i = [1, 2, 3, 4]

// let wrapper;

describe('<AddCenter /> Component', () => {
  const wrapper = shallow(<AddCenter {...props} />);
  it('should render the <AddCenter />', () => {
    shallow(<AddCenter {...props} />);
  });

  it('should render the <AddCenter /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('AddCenter').length).toBe(1);
  });

  it('should match component snapshot', () => {
    const tree = render.create(<Provider store={store}>
      <BrowserRouter>
        <ConnectedAddCenter {...props} />
      </BrowserRouter>
    </Provider>);
    expect(tree).toMatchSnapshot();
  });


  it('should render initial layout of <AddCenter />', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should have three div on layout', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should have <CenterFrom /> when the page loads', () => {
    expect(wrapper.find(CenterFrom)).toHaveLength(1);
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

  it('calls onClick event', () => {
    sinon.spy(shallowWrapper.instance(), 'onClick');
    shallowWrapper.setState(state);
    shallowWrapper.instance().onClick();
    expect(shallowWrapper.instance().onClick.calledOnce).toEqual(true);
  });

  it('calls onKeyPress event', () => {
    sinon.spy(shallowWrapper.instance(), 'onKeyPress');
    shallowWrapper.setState(state);
    shallowWrapper.instance().onKeyPress(event);
    expect(shallowWrapper.instance().onKeyPress.calledOnce).toEqual(true);
  });

  it('calls removeFacility event', () => {
    sinon.spy(shallowWrapper.instance(), 'removeFacility');
    shallowWrapper.setState(state);
    shallowWrapper.instance().removeFacility(i);
    expect(shallowWrapper.instance().removeFacility.calledOnce).toEqual(true);
  });

  it('should have three div element match snap', () => {
    expect(wrapper.getElements('div')).toMatchSnapshot();
  });


  it('should have div element', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });
});

