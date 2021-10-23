import { fork, all, take, cancel } from 'redux-saga/effects';
import watchUsers from './users';


export default () =>
  all([
    fork(watchUsers),
  ]);

export function createDynamicSaga(changeActionType, startingSagas) {
  function* _start(sagas) {
    try {
      yield sagas;
    } catch (e) {
      console.error('error', e);
    }
  }
  return function* dynamicSaga() {
    let action;
    let rootTask = yield fork(_start, startingSagas);
    while ((action = yield take(changeActionType))) {
      yield cancel(rootTask);
      rootTask = yield fork(_start, action.sagas);
    }
  };
}
