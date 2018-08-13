import { createAction } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';

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

export const actions = {
  incrementCounter,
  decrementCounter,
};

const Api = {
  incrementCount: () => {
    setTimeout(() => {
      console.log('Mock response from API');
      return {};
    }, 1000);
  },
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* updateServerCount() {
  try {
    yield call(Api.incrementCount);
    yield put({ type: 'INCREMENT_SUCCEEDED' });
  } catch (e) {
    yield put({ type: 'INCREMENT_FAILED', message: e.message });
  }
}

/*
  Starts updateServerCount on each dispatched `COUNTER_INCREMENT` action.
  Allows concurrent incrementations of the count
*/
function* incrementSage() {
  yield takeEvery(COUNTER_INCREMENT, updateServerCount);
}

function* decrementSaga() {
  yield takeEvery(COUNTER_DECREMENT, updateServerCount);
}

export const Sagas = [incrementSage, decrementSaga];

// Selectors
export const getCount = state => state;
export const getDoubleCount = state => state * 2;
