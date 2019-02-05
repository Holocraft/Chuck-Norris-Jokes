import { combineReducers } from 'redux';
import jokeReducer from './jokeReducer';
import brendanReducer from './brendanReducer';

export default combineReducers({
  jokes: jokeReducer,
  brendan: brendanReducer
});
