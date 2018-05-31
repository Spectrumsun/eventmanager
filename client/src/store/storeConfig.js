import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setUser } from './actions/userAction';
import rootReducer from './reducers/index';

const tool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = tool;

const middleware = composeEnhancers(applyMiddleware(thunk))

const base = process.env.NODE_ENV === 'development' ?
  process.env.API_BASE_URL_DEV : process.env.API_BASE_URL_PROD;


axios.defaults.baseURL = base;

const store = createStore(
  rootReducer,
  middleware
);

store.dispatch(setUser(jwt.decode(localStorage.jwtToken)));


export default store;
