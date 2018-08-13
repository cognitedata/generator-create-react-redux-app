import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../modules/Counter';
import { Counter } from '../../components/Counter';

class CounterContainer extends React.Component {
  static propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };

  increment = () => {
    this.props.incrementCounter();
  };

  decrement = () => {
    this.props.decrementCounter();
  };

  render() {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
