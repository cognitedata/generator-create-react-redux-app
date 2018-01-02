import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import ReduxThunk from 'redux-thunk';
import rootReducer from 'reducer';

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), ReduxThunk];

export default function configureStore(initialState = {}) {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}
