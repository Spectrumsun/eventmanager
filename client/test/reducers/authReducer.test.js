import user from '../mocks/users';
import * as actionTypes from '../../src/store/actions/actionsTypes';
import authReducer from '../../src/store/reducers/authReducer';

describe('Auth Reducer', () => {
  const initialState = {
    isAuthenticated: false,
    user: {}
  };

  it('should return proper initial state', (done) => {
    expect(authReducer(undefined, {})).toEqual(initialState);
    done();
  });

  it('dispatches action SET_CURRENT_USER', (done) => {
    const action = {
      type: actionTypes.SET_CURRENT_USER,
      user: user.decodedToken
    };

    const newState = authReducer({}, action);
    expect(newState.user.fullname).toEqual('John Doe');
    expect(newState.user.role).toEqual('user');
    done();
  });
});
