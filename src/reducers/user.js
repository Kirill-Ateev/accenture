import {
  LOGIN,
  LOGOUT,
  REQUEST_USER,
  RECEIVE_USER,
  NOT_RECEIVE_USER,
  CLEAR_USER,
  NOT_CLEAR_USER,
} from '../constants/actionTypes';

export default function user(
  state = {
    isLogged: false,
    isFetching: false,
    isActivated: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case LOGIN:
      return { ...state };

    case REQUEST_USER:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_USER:
      return {
        ...state,
        isLogged: true,
        isFetching: false,
        id: action.id,
        email: action.email,
        isActivated: action.isActivated,
        error: null,
      };

    case NOT_RECEIVE_USER:
      return {
        ...state,
        isLogged: false,
        isFetching: false,
        error: action.error,
      };

    case LOGOUT:
      return {
        ...state,
        isFetching: true,
      };

    case CLEAR_USER:
      return {
        ...state,
        isLogged: false,
        isFetching: false,
        isActivated: false,
        error: null,
      };

    case NOT_CLEAR_USER:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    default:
      return state;
  }
}
