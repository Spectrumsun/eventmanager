import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import render from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../src/components/UI/Home';

const testRender = render.create(
  <BrowserRouter>
    <Provider>
      <Home />
    </Provider>
  </BrowserRouter>);

describe('<Homepage/>', () => {
  const wrapper = mount(
    <BrowserRouter>
      <Provider>
        <Home />
      </Provider>
    </BrowserRouter>);
  it('renders <Homepage/> component', () => {
    expect(testRender).toMatchSnapshot();
  });
});
