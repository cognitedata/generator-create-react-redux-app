// Constants
export const INCREMENT_COUNTER = 'counter/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'counter/DECREMENT_COUNTER';

// Reducer
const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

// Action creators
export const increment = { type: INCREMENT_COUNTER };

export const decrement = { type: DECREMENT_COUNTER };

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

// Selectors
