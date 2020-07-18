import { authHeader } from '../_helpers';
import { baseURL } from '../../shared/baseUrl';

export const userService = {
  login,
  logout,
  register,
};

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${baseURL}auth/login`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      saveToken(data.token);
      saveUser(data.data.user);

      return data.data.user;
    });
}

function logout() {
  // remove user from local storage to log user out
  // localStorage.removeItem('user');
  clearToken();
  clearUser();

  const requestOptions = {
    method: 'POST',
  };

  return fetch(`${baseURL}auth/logout`, requestOptions);
}

// function getAll() {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader(),
//   };

//   return fetch(`/users`, requestOptions).then(handleResponse);
// }

// function getById(id) {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader(),
//   };

//   return fetch(`/users/${id}`, requestOptions).then(handleResponse);
// }

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  return fetch(`${baseURL}auth/signup`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      saveToken(data.token);
      saveUser(data.data.user);

      return data.data.user;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function saveToken(token) {
  localStorage.setItem('token', token);
}

function clearUser() {
  localStorage.removeItem('user');
}

function clearToken() {
  localStorage.removeItem('token');
}
