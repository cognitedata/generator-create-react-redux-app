import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Intro = styled.p`
  font-size: large;
`;

const Counter = ({ increment, decrement, counter }) => (
  <section>
    <Intro>
      To get started, edit <code>src/routes/index.js </code>
      and save to reload.
    </Intro>
    <p>
      Clicked: {counter} times <button onClick={increment}>+</button>{' '}
      <button onClick={decrement}>-</button>{' '}
    </p>
  </section>
);

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Counter;
