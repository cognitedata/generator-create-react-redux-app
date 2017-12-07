import { createAction } from 'redux-actions';

// Constants
export const COUNTER_INCREMENT = 'counter/COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'counter/COUNTER_DECREMENT';

// Reducer
const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Action creators
export const incrementCounter = createAction(COUNTER_INCREMENT);

export const decrementCounter = createAction(COUNTER_DECREMENT);

export const incrementCounterIfOdd = () => (dispatch, getState) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch(incrementCounter());
};

export const actions = {
  incrementCounter,
  decrementCounter,
  incrementCounterIfOdd,
};

// Selectors
export const getCount = state => state;
export const getDoubleCount = state => state * 2;
