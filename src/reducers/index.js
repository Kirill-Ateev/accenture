import { combineReducers } from 'redux';
import user from './user';
import network from './network';

let reducers = combineReducers({
    user,
    network
  });

export default reducers;
