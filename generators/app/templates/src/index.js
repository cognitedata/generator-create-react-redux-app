import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Metrics from '@cognite/metrics';
import 'antd/dist/antd.css';

import './styles/global-styles';
import registerServiceWorker from './utils/registerServiceWorker';
import configureStore from './store';
import Routes from './routes';
import theme from 'styles/theme';

Metrics.init({ mixpanelToken: 123 });

render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
