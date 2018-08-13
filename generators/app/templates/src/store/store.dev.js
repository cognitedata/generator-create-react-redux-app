import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducer';

import Sagas from '../sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [routerMiddleware(history), sagaMiddleware];
  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ];
  const composeEnhancers = composeWithDevTools({
    // other compose enhancers if any
    // Specify here other options if needed
  });
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(...enhancers)
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      /* eslint-disable global-require */
      const nextReducer = require('../reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(Sagas);

  return store;
}
