import {
  NETWORK_ACCESS_DENIED,
  NETWORK_CONFLICT,
  NETWORK_SERVER_ERROR,
  NETWORK_UNAUTHORIZED,
  NETWORK_DEFAULT_ERROR,
  RESET_NETWORK_ERROR,
  RESET_NETWORK_ERRORS,
  NETWORK_BAD_REQUEST,
} from '../constants/actionTypes';
import {
  unauthorized,
  accessDenied,
  serverError,
  defaultError,
  conflictError,
  badRequest,
} from '../constants/networkErrors';

// TODO: refactor, reduce code
export default function network(
  state = {
    errors: [],
  },
  action
) {
  switch (action.type) {
    case NETWORK_UNAUTHORIZED:
      return {
        ...state,
        errors: [...state.errors, unauthorized],
      };
    case NETWORK_ACCESS_DENIED:
      return {
        ...state,
        errors: [...state.errors, accessDenied],
      };
    case NETWORK_CONFLICT:
      return {
        ...state,
        errors: [...state.errors, conflictError],
      };
    case NETWORK_SERVER_ERROR:
      return {
        ...state,
        errors: [...state.errors, serverError],
      };
    case NETWORK_DEFAULT_ERROR:
      return {
        ...state,
        errors: [...state.errors, defaultError],
      };
    case NETWORK_BAD_REQUEST:
      return {
        ...state,
        errors: [...state.errors, badRequest],
      };
    case RESET_NETWORK_ERROR:
      return {
        ...state,
        errors: state.errors.filter((error) => error !== action.error),
      };
    case RESET_NETWORK_ERRORS:
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
}
