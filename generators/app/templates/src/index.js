import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'store';
import Routes from 'routes';
import 'styles/global-styles';
import registerServiceWorker from 'utils/registerServiceWorker';

// TODO: create a cognite theme that is re-usable
const theme = {};

render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
