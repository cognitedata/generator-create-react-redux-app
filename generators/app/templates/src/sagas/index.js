import { fork, all } from 'redux-saga/effects';

import { Sagas as CounterSagas } from 'modules/Counter';

export default function* rootSaga() {
  yield all([...CounterSagas.map(saga => fork(saga))]);
}
