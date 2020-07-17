import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
  login,
  logout,
  register,
};

function login({ email, password }) {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        history.push('/');
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.USERS_SIGNIN_PENDING, user };
  }
  function success(user) {
    return { type: userConstants.USERS_SIGNIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.USERS_SIGNIN_FAILED, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push('/login');
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.USERS_SIGNUP_PENDING, user };
  }
  function success(user) {
    return { type: userConstants.USERS_SIGNUP_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.USERS_SIGNUP_FAILED, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
