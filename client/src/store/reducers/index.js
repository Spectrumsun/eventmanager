import { combineReducers } from 'redux';
import centerReducer from './centerReducer';
import userReducer from './userReducer';
import eventReducer from './eventReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';

/**
 * @description combines all reducers into one
 */
const rootReducer = combineReducers({
  centers: centerReducer,
  users: userReducer,
  events: eventReducer,
  auth: authReducer,
  search: searchReducer
});

export default rootReducer;
