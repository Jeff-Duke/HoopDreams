import { combineReducers } from 'redux';
import team from './team';
import user from './user';

const reducers = combineReducers({
  team,
  user
});

export default reducers;
