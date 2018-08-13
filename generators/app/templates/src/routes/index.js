import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store';
import { CounterContainer } from '../containers';

function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={CounterContainer} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Routes;
