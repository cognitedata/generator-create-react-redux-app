import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector, createSelector } from 'reselect';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from 'modules/counter';
import { Counter } from '../components/Counter';

class CounterContainer extends React.Component {
  static propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    incrementCounterIfOdd: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };

  incrementCounter = () => {
    this.props.incrementCounter();
  };

  decrementCounter = () => {
    this.props.decrementCounter();
  };

  incrementCounterIfOdd = () => {
    this.props.incrementCounterIfOdd();
  };

  render() {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.incrementCounter}
        decrement={this.decrementCounter}
        incrementIfOdd={this.incrementCounterIfOdd}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  counter: createSelector(state => state.counter, counterState => counterState),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
