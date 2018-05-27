import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../src/store/actions/actionsTypes';
import mockUser from '../mocks/users';
import { signUpUser } from '../../src/store/actions/userAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test for user sign in', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatch action to sign up a user', (done) => {
    moxios.stubRequest('/api/v1/users', {
      status: 201,
      res: mockUser.signupRes
    });

    const expectedActions = [
      {
        type: types.SIGN_UP_USER,
        user: mockUser.user
      },
    ];
    const store = mockStore({});

    return store.dispatch(signUpUser(mockUser.signupReq))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
