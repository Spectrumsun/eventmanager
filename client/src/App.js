import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/storeConfig';
import NavBar from './components/UI/NavBar';
import '../../node_modules/toastr/build/toastr.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/style.scss';

require('bootstrap');


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
