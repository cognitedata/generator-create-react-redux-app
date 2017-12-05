import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import ReduxThunk from 'redux-thunk';
import rootReducer from 'reducer';

// const logger = () => next => action => {
//   if (action.type === '@@router/LOCATION_CHANGE') {
//     global.mixpanel.track('Location change', action.payload);
//   }
//   const result = next(action);
//   return result;
// };

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), ReduxThunk /** , logger */];

export default function configureStore(initialState = {}) {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}
