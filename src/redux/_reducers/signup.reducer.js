import { userConstants } from '../_constants';

export function signupReducer(state = {}, action) {
  switch (action.type) {
    case userConstants.USERS_SIGNUP_PENDING:
      return { registering: true, user: action.user };
    case userConstants.USERS_SIGNIN_SUCCESS:
      return { registered: true, user: action.user };
    case userConstants.USERS_SIGNUP_FAILED:
      return {};
    default:
      return state;
  }
}
