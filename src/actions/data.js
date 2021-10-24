import * as types from '../constants/actionTypes';

export function getKpiData() {
  return { type: types.REQUEST_DATA };
}

export function getKpiEntries(id) {
  return { type: types.REQUEST_KPI_ENTRIES, id };
}
