import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import render from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import ConnectedEmailVerify,
{ EmailVerify, mapDispatchToProps } from '../../../src/components/User/EmailVerify';


const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  isAuthenticated: false,
  user: {},
  match: {
    params: {
      token: 'kjfhjrf'
    }
  },
  params: {
    id: 1,
    token: 'pokjhbhjkef'
  }
};
const store = mockStore(initialState);

const props = {
  initemailverify: sinon.spy(() => new Promise((cb) => {
    cb();
  })),
  history: createMemoryHistory(),
  match: {
    params: {
      id: 1,
      token: 'pokjhbhjkef'
    }
  },
  params: {
    id: 1,
    token: 'pokjhbhjkef'
  }
};

const mountedWrapper = mount(
  <Provider store={store}>
  <BrowserRouter>
    <ConnectedEmailVerify {...props} />
  </BrowserRouter>
  </Provider>
);

const shallowWrapper = shallow(<EmailVerify {...props} />);

describe('<EmailVerify /> Component', () => {
  it('should render the <Login />', () => {
    shallow(<EmailVerify {...props}  />);
  });

  it('should render the <EmailVerify /> without crashing', () => {
    expect(mountedWrapper).toBeDefined();
    expect(mountedWrapper.find('EmailVerify').length).toBe(1);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <BrowserRouter >
        <EmailVerify {...props} />
      </BrowserRouter>);
    expect(tree).toMatchSnapshot();
  });

  it('should render initial layout of EmailVerify', () => {
    const wrapper = shallow(<EmailVerify {...props} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have image on layout', () => {
    const wrapper = shallow(<EmailVerify {...props} />);
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('ensures that mapDispatchToProps dispatches the specified actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).initemailverify).toBeTruthy();
  });
});

