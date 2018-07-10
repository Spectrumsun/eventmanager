import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import render from 'react-test-renderer';
import sinon from 'sinon';
import 
{ EmailVerify, mapDispatchToProps } from '../../../src/components/User/EmailVerify';


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

const shallowWrapper = shallow(<EmailVerify {...props} />);

describe('<EmailVerify /> Component', () => {
  it('should render the <Login />', () => {
    shallow(<EmailVerify {...props}  />);
  });

  it('should match component snapshot', () => {
    const tree = render.create(
      <BrowserRouter >
        <EmailVerify {...props} />
      </BrowserRouter>);
    expect(tree).toMatchSnapshot();
  });

  it('should render initial layout of EmailVerify', () => {
    const wrapper = shallowWrapper;
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  it('should have image on layout', () => {
    const wrapper = shallowWrapper;
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('ensures that mapDispatchToProps dispatches the specified actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).initemailverify).toBeTruthy();
  });
});

