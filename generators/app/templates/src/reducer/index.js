import { combineReducers } from 'redux';
import CounterReducer from 'modules/Counter';

const rootReducer = combineReducers({
  CounterReducer,
});

export default rootReducer;
