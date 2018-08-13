import { combineReducers } from 'redux';
import CounterReducer from '../modules/Counter';

const rootReducer = combineReducers({
  counter: CounterReducer,
});

export default rootReducer;
