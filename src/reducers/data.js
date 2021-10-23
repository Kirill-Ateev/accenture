import {
  REQUEST_DATA,
  RECEIVE_DATA,
  NOT_RECEIVE_DATA,
} from '../constants/actionTypes';

export default function user(
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

    default:
      return state;
  }
}
