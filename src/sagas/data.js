import { takeEvery, put, call, fork, select } from 'redux-saga/effects';
import Api from '../api/api';
import * as types from '../constants/actionTypes';

export function* getKpiData(action) {
  try {
      console.log('123')
    const response = yield call(Api.get, 'kpi-dashboard');

    yield put({
      type: types.RECEIVE_DATA,
      kpi: response,
    });
  } catch (error) {
    yield put({
      type: types.NOT_RECEIVE_DATA,
      errors: response
    });
    yield put({ type: types.NETWORK_ERROR, error });
  }
}

export function* getKpiEntries(action) {
    try {
      const response = yield call(Api.get, 'kpi-entries');
  
      yield put({
        type: types.RECEIVE_KPI_ENTRIES,
        kpi: response,
      });
    } catch (error) {
      yield put({
        type: types.NOT_RECEIVE_KPI_ENTRIES,
        errors: response
      });
      yield put({ type: types.NETWORK_ERROR, error });
    }
  }
export default function* watchUsers() {
  yield takeEvery(types.REQUEST_DATA, getKpiData);
}
