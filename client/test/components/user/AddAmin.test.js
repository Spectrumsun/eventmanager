import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import sinon from 'sinon';
import ConnectedAddAmin,
{ AddAmin, mapDispatchToProps } from '../../../src/components/User/addAmin';
import TextField from '../../../src/components/User/TextField'

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  isAuthenticated: false,
  user: {},
};
const store = mockStore(initialState);

const props = {
  initaddAdmin: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory()
};

const mountedWrapper = mount(
  <Provider store={store}>
  <BrowserRouter>
    <ConnectedAddAmin {...props} />
  </BrowserRouter>
  </Provider>
);

const shallowWrapper = shallow(<AddAmin {...props} />);

const state = {
  email: 'bot@yahoo.com',
  role: 'user',
};

const event = {
  preventDefault: jest.fn(),
  target: {
    email: 'bot@yahoo.com',
    role: 'user',
  }
};

// let wrapper;

describe('<Admin /> Component', () => {
  it('should render the <Login />', () => {
    shallow(<AddAmin />);
  });

  it('should render the <Admin /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('AddAmin').length).toBe(1);
  });

  it('should have <TextField /> when the page loads', () => {
    const wrapper = shallow(<AddAmin />);
    expect(wrapper.find(TextField)).toHaveLength(2);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <BrowserRouter >
        <AddAmin {...props} />
      </BrowserRouter>);
    expect(tree).toMatchSnapshot();
  });

  it('should have div on layout', () => {
    const wrapper = shallow(<AddAmin />);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('calls onChange event when input is passed to state', () => {
    sinon.spy(shallowWrapper.instance(), 'onChange');
    shallowWrapper.instance().onChange(event);
    expect(shallowWrapper.instance().onChange.calledOnce).toEqual(true);
  });

  it('calls onSubmit event when submit button is clicked', () => {
    sinon.spy(shallowWrapper.instance(), 'onSubmit');
    shallowWrapper.setState(state);
    shallowWrapper.instance().onSubmit(event);
    expect(shallowWrapper.instance().onSubmit.calledOnce).toEqual(true);
  });

  it('ensures that mapDispatchToProps dispatches the specified actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).initaddAdmin).toBeTruthy();
  });

});

