import {
  REQUEST_DATA,
  RECEIVE_DATA,
  NOT_RECEIVE_DATA,
  REQUEST_KPI_ENTRIES,
  RECEIVE_KPI_ENTRIES,
  NOT_RECEIVE_KPI_ENTRIES,
} from '../constants/actionTypes';

export default function data(
  state = {
    isFetching: false,
    kpi: null,
    errors: null,
  },
  action
) {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        kpi: action.kpi,
      };

    case NOT_RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };

      case REQUEST_KPI_ENTRIES:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_KPI_ENTRIES:
      return {
        ...state,
        isFetching: false,
        kpi: state.kpi.map(elem=> elem.id === action.id ? {...elem, entries: action.entries} : elem),
      };

    case NOT_RECEIVE_KPI_ENTRIES:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };

    default:
      return state;
  }
}
