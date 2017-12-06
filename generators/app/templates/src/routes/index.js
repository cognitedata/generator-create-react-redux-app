import React from 'react';
import { CounterContainer } from 'containers';
import { Header } from 'components';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';
import { history } from 'store';

const Container = styled.div`
  text-align: center;
`;

function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Container>
        <Header />
        <Route path="/" component={CounterContainer} />
      </Container>
    </ConnectedRouter>
  );
}

export default Routes;
