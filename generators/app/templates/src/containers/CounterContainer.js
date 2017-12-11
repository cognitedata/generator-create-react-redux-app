import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector, createSelector } from 'reselect';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from 'modules/Counter';
import { Counter } from '../components/Counter';

class CounterContainer extends React.Component {
  static propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    incrementCounterIfOdd: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };

  increment = () => {
    this.props.incrementCounter();
  };

  decrement = () => {
    this.props.decrementCounter();
  };

  incrementIfOdd = () => {
    this.props.incrementCounterIfOdd();
  };

  render() {
    console.log(this.props);
    return (
      <Counter
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
        incrementIfOdd={this.incrementIfOdd}
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
