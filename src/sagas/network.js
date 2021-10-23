import { takeLatest, put, select } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import {
  unauthorized,
  accessDenied,
  serverError,
  defaultError
} from '../constants/networkErrors';

function* updateError(action) {
  try {
    let {
      error,
      error: { status }
    } = action;

    const errorsState = yield select(state => state.network.errors);

    if (status === 401) {
      if (errorsState.includes(unauthorized)) return;
      yield put({ type: types.NETWORK_UNAUTHORIZED });
    } else if (status === 403) {
      if (errorsState.includes(accessDenied)) return;
      yield put({ type: types.NETWORK_ACCESS_DENIED });
    } else if (status === 409) {
      yield put({ type: types.NETWORK_CONFLICT });
    } else if (status === 500) {
      if (errorsState.includes(serverError)) return;
      yield put({ type: types.NETWORK_SERVER_ERROR });
    } else if (status !== 400 && status !== 404) {
      if (errorsState.includes(defaultError)) return;
      yield put({ type: types.NETWORK_DEFAULT_ERROR });
    } else if (status === 400) {
      if (errorsState.includes(unauthorized)) return;
      // TODO: handle messages
      yield put({ type: types.NETWORK_BAD_REQUEST });
    }

  } catch (error) {
    yield put({ type: types.RESET_NETWORK_ERRORS });
  }
}

export default function* watchNetwork() {
  yield takeLatest(types.NETWORK_ERROR, updateError);
}
