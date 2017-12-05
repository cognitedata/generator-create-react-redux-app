import { combineReducers } from 'redux';
import counter from 'modules/counter';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
