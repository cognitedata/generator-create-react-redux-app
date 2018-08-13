import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Metrics from '@cognite/metrics';

import './styles/global-styles';
import registerServiceWorker from './utils/registerServiceWorker';
import configureStore from './store';
import Routes from './routes';

Metrics.init({ mixpanelToken: 123 });

// https://www.styled-components.com/docs/advanced#theming
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
