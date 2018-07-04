import user from '../mocks/users';
import * as actionTypes from '../../src/store/actions/actionsTypes';
import userReducer from '../../src/store/reducers/userReducer';

describe('User Reducer', () => {
  const initialState = {
    user: [],
    message: [],
    error: false
  };

  it('should return proper initial state', (done) => {
    expect(userReducer(undefined, {})).toEqual(initialState);
    done();
  });

  it('signup user when action of type SET_CURRENT_USER is called', (done) => {
    const action = {
      type: actionTypes.SIGN_UP_USER,
      user: user.signinResponse.message,
      error: false,
    };
    const newState = userReducer(initialState, action);
    expect(newState.user).toEqual(action.user);
    done();
  });

  it('login user when action of type LOGGED_IN is called', (done) => {
    const action = {
      type: actionTypes.LOGGED_IN,
      user: user.signinResponse.message,
      error: false,
    };
    const newState = userReducer({}, action);
    expect(newState.user).toEqual('Welcome John Doe');
    done();
  });

  it('add admin when action of type ADD_ADMIN is called', (done) => {
    const action = {
      type: actionTypes.ADD_ADMIN,
      message: user.adminMessage.message,
      error: false,
    };
    const newState = userReducer({}, action);
    expect(newState.message).toEqual('user role changed');
    done();
  });

  it('confirm password when action of type CONFIRM_PASSWORD is called', (done) => {
    const action = {
      type: actionTypes.CONFIRM_PASSWORD,
      message: user.confirmPassword.message,
      error: false,
    };
    const newState = userReducer({}, action);
    expect(newState.message).toEqual('Check your email for a password reset link');
    done();
  });

  it('reset password when action of type PASSWORD_RESET is called', (done) => {
    const action = {
      type: actionTypes.PASSWORD_RESET,
      message: user.passwordChange.message,
      error: false,
    };
    const newState = userReducer({}, action);
    expect(newState.message).toEqual('Password Changed. You can Login with your new password');
    done();
  });

  it('reset password when action of type PASSWORD_RESET is called', (done) => {
    const action = {
      type: actionTypes.PASSWORD_RESET,
      message: user.passwordChange.message,
      error: false,
    };
    const newState = userReducer({}, action);
    expect(newState.message).toEqual('Password Changed. You can Login with your new password');
    done();
  });

  it('verify account when action of type EMAIL_VERIFY is called', (done) => {
    const action = {
      type: actionTypes.EMAIL_VERIFY,
      message: user.emailVerification.message,
      error: false,
    };
    const newState = userReducer({}, action);
    expect(newState.message).toEqual('Nice! Email Confirmed You are can now login!');
    done();
  });

  it('call action of type USER_ERROR when they is an error', (done) => {
    const action = {
      type: actionTypes.USER_ERROR,
      error: true,
    };
    const newState = userReducer({}, action);
    expect(newState.error).toEqual(true);
    done();
  });
});
