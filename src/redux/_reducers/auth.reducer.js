import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.USERS_SIGNIN_PENDING:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.USERS_SIGNIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.USERS_SIGNIN_FAILED:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
