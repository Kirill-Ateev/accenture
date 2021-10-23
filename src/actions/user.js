import * as types from '../constants/actionTypes';

export function login(email, password) {
  return { type: types.LOGIN, email, password };
}

export function requestProfile() {
  return { type: types.REQUEST_USER };
}

export function logout() {
  return { type: types.LOGOUT };
}

