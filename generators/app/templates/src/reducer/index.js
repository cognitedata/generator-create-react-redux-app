import { combineReducers } from 'redux';
import CounterReducer from 'modules/CounterReducer';

const rootReducer = combineReducers({
  CounterReducer,
});

export default rootReducer;
