import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Metrics from '@cognite/metrics';

// Stub out the entire Metrics class
Metrics.create = () => ({
  track: () => {},
  start: () => ({ stop: () => {} }),
});

const state = {};

const mockStore = configureStore();
const store = mockStore(state);

// TODO: How to handle the async functions?
store.dispatch = f => {
  if (typeof f === 'function') {
    f(store.dispatch, () => state);
  } else {
    console.log(f);
  }
};

const Provider = ({ story }) => (
    <ReduxProvider store={store}>
      <div style={{ margin: '1em' }}>{story()}</div>
    </ReduxProvider>
);

Provider.propTypes = {
  story: PropTypes.func.isRequired,
};

export default Provider;
