import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import axios from 'axios';
import NavBar from './components/UI/NavBar';
// import Footer from './components/Footer';
import '../../node_modules/toastr/build/toastr.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/style.css';
import centerReducer from './store/reducers/centerReducer';

require('bootstrap');

axios.defaults.baseURL = 'http://localhost:5000/api/v1/';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(centerReducer, composeEnhancers(applyMiddleware(thunk)));

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
    </BrowserRouter>
  </Provider>
);


export default App;
