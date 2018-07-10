import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../../src/store/actions/actionsTypes';
import * as action from '../../src/store/actions/index';
import user from '../mocks/users';
import { errorHandler, successHandler } from '../../src/static/js/responsesHandler';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Test for user action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatch action SIGN_UP_USER to sign up a user', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: user.signupResponse,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.SIGN_UP_USER,
        user: user.signupResponse
      }
    ];
    const store = mockStore({});
    const history = createMemoryHistory('/');

    return store.dispatch(action.initUser(user.signupRequest, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action  SET_CURRENT_USER to login a user', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: user.signinResponse,
        token: user.token
      });
    });

    const item = null;
    const expectedActions = [
      {
        type: actionTypes.SET_CURRENT_USER,
        user: item
      },
      {
        type: actionTypes.LOGGED_IN,
        user: user.signinResponse.message
      }
    ];
    const store = mockStore({});
    const history = createMemoryHistory('/');

    return store.dispatch(action.initUserLogin(user.signupRequest, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action SET_CURRENT_USER to logout a user', (done) => {
    const expectedActions = [
      {
        type: actionTypes.SET_CURRENT_USER,
        user: {}
      }
    ];
    const store = mockStore({});
    const history = createMemoryHistory('/');

    store.dispatch(action.initUserLogout(history));
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('dispatch action ADD_ADMIN when admin is added', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: user.adminMessage,
      });
    });

    const message = 'user role changed';
    const userDetails = {
      email: 'tomato@example.com',
      role: 'ADMIN'
    };

    const expectedActions = [
      {
        type: actionTypes.ADD_ADMIN,
        message
      }
    ];

    const store = mockStore({});
    const history = createMemoryHistory('/');

    return store.dispatch(action.initaddAdmin(userDetails, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action CONFIRM_PASSWORD user request password reset', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: user.confirmPassword,
      });
    });

    const message = 'Check your email for a password reset link';
    const userDetails = {
      email: 'tomato@example.com',
      role: 'ADMIN'
    };

    const expectedActions = [
      {
        type: actionTypes.CONFIRM_PASSWORD,
        message
      }
    ];

    const store = mockStore({});
    const history = createMemoryHistory('/');

    return store.dispatch(action.initconfirmPassword(userDetails, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action PASSWORD_RESET when user reset password', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: user.passwordChange,
      });
    });

    const message = 'Password Changed. You can Login with your new password';
    const userDetails = {
      password: '123456',
      confirmPassword: '123456'
    };

    const expectedActions = [
      {
        type: actionTypes.PASSWORD_RESET,
        message
      }
    ];

    const store = mockStore({});
    const history = createMemoryHistory('/');

    return store.dispatch(action.initpasswordreset(user.signinResponse.token, userDetails, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action EMAIL_VERIFY when user comfirm email address', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: user.emailVerification,
      });
    });

    const message = 'Nice! Email Confirmed You are can now login!';

    const expectedActions = [
      {
        type: actionTypes.EMAIL_VERIFY,
        message
      }
    ];

    const store = mockStore({});
    const history = createMemoryHistory('/');

    return store.dispatch(action.initemailverify(user.signinResponse.token, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('dispatch action USER_ERROR to return error', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: user.error
      });
    });
    const expectedActions = [
      {
        type: actionTypes.USER_ERROR,
        error: user.error
      }
    ];
    const store = mockStore({});
    store.dispatch(action.userError(user.error));
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('error function', (done) => {
    const error = {
      response: {
        data: {
          message: 'Signup Errors',
          errorMessage: [
            'You must supply a name!',
            'That Email is not valid!',
            'Password Cannot be Blank cant be less than six Characters!',
            'Password Cannot be Blank cant be less than six Characters!',
            'Oops! Your passwords do not match'
          ]
        }
      }
    };
  
    expect(errorHandler(error)).toEqual(undefined);
    done();
  });

  it('success function', (done) => {
    const res = {
      data: {
        message: 'Signup Errors',
      }
    };
  
    expect(successHandler(res)).toEqual(undefined);
    done();
  });
});

