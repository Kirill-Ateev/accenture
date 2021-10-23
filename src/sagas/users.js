import { takeEvery, put, call, fork, select } from 'redux-saga/effects';
import Api from '../api/api';
import * as types from '../constants/actionTypes';

export function* login(action) {
  try {
    const response = yield call(Api.post, 'login', {
      data: {
        email: action.email,
        password: action.password,
      },
    });

    if (response.accessToken && response.userDto.id) {
      localStorage.setItem('token', response.accessToken);
      yield put({
        type: types.RECEIVE_USER,
        id: response.userDto.id,
        email: response.userDto.email,
        isActivated: response.userDto.isActivated,
      });
    }
  } catch (error) {
    yield put({
      type: types.NOT_RECEIVE_USER,
      errors: error.response,
      error,
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}

export function* requestProfile(action) {
  try {
    const response = yield call(Api.get, 'profile');

    if (response.id) {
      yield put({
        type: types.RECEIVE_USER,
        id: response.id,
        email: response.email,
        isActivated: response.isActivated,
      });
    }
    //TODO: redirect to registration form
  } catch (error) {
    yield put({
      type: types.NOT_RECEIVE_USER,
      errors: error.response,
      error,
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}

export function* logout(action) {
  try {
    const response = yield call(Api.post, 'logout');

    if (response.ok === 1) {
      localStorage.removeItem('token');
      yield put({
        type: types.CLEAR_USER,
      });
    }
  } catch (error) {
    yield put({
      type: types.NOT_CLEAR_USER,
      errors: error.response,
      error,
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}

export default function* watchUsers() {
  yield takeEvery(types.LOGIN, login);
  yield takeEvery(types.REQUEST_USER, requestProfile);
  yield takeEvery(types.LOGOUT, logout);
}
